const articles = require("./data/posts.json");
const readline = require("readline");
// Opzioni DB --

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.cached.Database("./secretP.db", [
	sqlite3.OPEN_READWRITE,
	sqlite3.OPEN_CREATE,
	sqlite3.OPEN_FULLMUTEX,
]);
const prevw_img = "https://picsum.photos/500/300/?blur";
// Fine opzioni DB --

function askQuestion(query) {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	return new Promise((resolve) =>
		rl.question(query, (ans) => {
			rl.close();
			resolve(ans);
		})
	);
}
askQuestion("").then((e) =>
	Number(e) === 1 ? (initDB(), console.log("DB rigenerato")) : console.log("db non rigenerato")
);

// Inizializzazione DB sqlite
function initDB() {
	db.serialize(() => {
		db.serialize(() => {
			db.run("DROP TABLE IF EXISTS users");
			db.run("DROP TABLE IF EXISTS articles");
		});
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
	article JSON NOT NULL
	)`
		);

		// Import articoli da file JSON
		articles.posts.forEach((article) => {
			db.get("INSERT INTO articles VALUES (?, ?)", [null, JSON.stringify(article)], (err) => {
				if (err !== null) console.log(err);
			});
		});
	});
}
// Fine inizializzazione DB sqlite

module.exports = { db };
