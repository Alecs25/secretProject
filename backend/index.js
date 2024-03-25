const express = require("express");
const app = express();
const cors = require("cors");
const articles = require("./data/posts.json");
const { createArticle, getArticles } = require("./controllers/articles-controller");

// Opzioni express

const port = 3000;


//Lettura JSON
app.use(express.json());

// CORS
app.use(cors());

// Fine opzioni express

app.listen(port, () => {
	console.log(`In ascolto su porta ${port}`);
});

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.cached.Database(":memory:");

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
			`INSERT INTO articles VALUES (null, ${1}, ${JSON.stringify(article.title)}, null,null, ${JSON.stringify(
				article.body
			)})`,
			(err, row) => {
				if (err !== null) console.log(err);
			}
		);
	});
});
// Fine inizializzazione DB sqlite

app.get("/articles", getArticles());

app.post("/createArticle", createArticle());

// db.close();
