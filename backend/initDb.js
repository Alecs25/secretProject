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
			db.run("DROP TABLE IF EXISTS comments");
		});
		db.run(
			`CREATE TABLE users(
  			   	user_id INTEGER PRIMARY KEY AUTOINCREMENT ,
               	username VARCHAR NOT NULL UNIQUE,
                password VARCHAR NOT NULL,
				isAdmin BOOLEAN,
				token TEXT)`
		);

		db.run(
			`CREATE TABLE articles(
 			article_id INTEGER PRIMARY KEY AUTOINCREMENT ,
			article JSON NOT NULL)`
		);
		//parent id: null se nuovo commento, altrimenti id del commento a cui è figlio
		//Il json contiene username, corpo messaggio, data e ora
		db.run(
			`CREATE TABLE comments(
 			comment_id INTEGER PRIMARY KEY AUTOINCREMENT,
			parent_id INTEGER, 
			article_id,
			user_id INTEGER NOT NULL,
			comment JSON NOT NULL,
			FOREIGN KEY(user_id) REFERENCES users(user_id),
			FOREIGN KEY(article_id) REFERENCES articles(article_id))`
		);

		db.run(`INSERT INTO users VALUES (?, ?, ?, ?, ?)`, [null, "alex", "ciao", true, null]);

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
