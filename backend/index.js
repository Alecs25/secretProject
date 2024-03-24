const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const articles = require("./data/posts.json");
let users = [];

// CORS
app.use(cors());
app.use(express.json());
// FINE CORS

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.cached.Database(":memory:");

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

	//console.log(typeof articles.posts);
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

app.post("/createArticle", async (req, res) => {
	console.dir(req.body);
	// console.dir( res );

	const createArticle = await db.all(
		`INSERT INTO articles VALUES (null, ${JSON.stringify(req.body.title)}, null, null, ${JSON.stringify(
			req.body.body
		)})`,
		(err, row) => {
			console.log(err);
		}
	);
	// console.dir(createArticle);

	//  await db.all("SELECT * FROM articles", (err, row) => {
	//  	console.log(err);
	//  	row.forEach((col) => console.log(col));
	//  });
});

// db.close();
