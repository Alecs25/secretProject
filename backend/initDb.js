const articles = require("./data/posts.json");

// Opzioni DB --

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.cached.Database(":memory:");
const prevw_img = "https://picsum.photos/500/300/?blur";
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
	prevw_img VARCHAR,
    description VARCHAR,
    body VARCHAR
	)`
	);

	// Import articoli da file JSON
	articles.posts.forEach((article) => {
		db.get("INSERT INTO articles VALUES (?, ?, ?, ?)", [null, prevw_img, null, article.body], (err, row) => {
			if (err !== null) console.log(err);
		});
	});
});
// Fine inizializzazione DB sqlite

module.exports = { db };
