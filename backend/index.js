const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const articles = require("./data/posts.json");
app.use(cors());
let users = [];

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.cached.Database(":memory:");

db.serialize(() => {
	db.run(
		`CREATE TABLE users(
    user_id INTEGER PRIMARY KEY,
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
    article_id INTEGER PRIMARY KEY,
    user_id INTEGER,
    title VARCHAR,
	prevw_img VARCHAR,
    description VARCHAR,
    body VARCHAR
	)`
	);

	//console.log(typeof articles.posts);
	articles.posts.forEach((article) => {
		db.all(
			`INSERT INTO articles VALUES (${article.id}, ${1}, ${JSON.stringify(article.title)}, null,null, ${JSON.stringify(
				article.body
			)})`,
			(err, row) => {
				if (err !== null) console.log(err);
			}
		);
	});

	// db.run("INSERT INTO users VALUES (1,'alex', 'ciaobellissimi', 0, 2000-08-25, 'lafregnadimammt@gmail.com', 1)");
	// // for (let i = 0; i < 10; i++) {
	// // 	stmt.run("Ipsum " + i);
	// // }

	// db.all("SELECT * FROM articles", (err, row) => {
	// 	row.forEach((col) => console.log(col));
	// });
});

app.get("/articles", async (req, res) => {
	// res.send("Hello World!");
	const posts = await db.all("SELECT * FROM articles", (err, row) => {
		res.send(row);
	});
	// console.log(posts);
	// res.send(posts);
});

// db.close();
