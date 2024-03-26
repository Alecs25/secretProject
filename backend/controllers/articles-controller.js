const { db } = require("../initDb");

async function createArticle(req, res) {
	const createArticle = await db.all(
		"INSERT INTO articles VALUES (?, ?, ?, ?, ?)",
		[null, req.body.title, "https://picsum.photos/500/300/?blur", null, req.body.articleBody],
		(err, row) => {
			if (err) console.log(err);
		}
	);
	res.send("create ok");
}

async function deleteArticle(req, res) {
	console.log("deleted article: ", req.params);

	const deleteArticle = await db.get(" DELETE FROM articles WHERE article_id = ? ", req.params.id, (err, row) => {
		if (err) console.log(err);
	});

	res.send("delete ok");
}

async function getArticles(req, res) {
	const posts = await db.all("SELECT * FROM articles", (err, row) => {
		res.send(row);
	});
}

async function getArticle(req, res) {
	console.log("got article: ", req.params);

	const posts = await db.get("SELECT * FROM articles WHERE article_id = ? ", req.params.id, (err, row) => {
		// console.log(row);
		res.send(row);
	});
}

async function editArticle(req, res) {
	console.log(req.body);

	const editArticle = await db.run(
		"UPDATE articles SET title = ?, body = ? WHERE article_id = ?",
		[req.body.title, req.body.body, req.body.id],
		(err, row) => {
			if (err) console.log(err);
			console.log(row);
			res.send("edit ok");
		}
	);
}

module.exports = { editArticle, getArticles, getArticle, createArticle, deleteArticle };
