const articles = require("./data/posts.json");

// Opzioni DB --

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.cached.Database(":memory:");

// Fine opzioni DB --

// Inizializzazione DB sqlite
db.serialize(() => {
	db.run(
		`CREATE TABLE users(
    user_id INTEGER PRIMARY KEY AUTOINCREMENT ,
    username VARCHAR,
    password VARCHAR,
    gender BOOLEAN,
    birth DATE,
    email VARCHAR,
    isAdmin BOOLEAN
	)`
	);

	db.run(
		`CREATE TABLE articles(
    article_id INTEGER PRIMARY KEY AUTOINCREMENT ,
    title VARCHAR,
	prevw_img VARCHAR,
    description VARCHAR,
    body VARCHAR
	)`
	);

	// Import articoli da file JSON
	articles.posts.forEach((article) => {
		db.all(
			`INSERT INTO articles VALUES (null, ${JSON.stringify(article.title)}, null,null, ${JSON.stringify(
				article.body
			)})`,
			(err, row) => {
				if (err !== null) console.log(err);
			}
		);
	});
});
// Fine inizializzazione DB sqlite

module.exports = { db };
