const { default: parse } = require("node-html-parser");
const { db } = require("../initDb");

async function createArticle(req, res) {
	const parsedArticle = parse(req.body.article);
	const title = parsedArticle.querySelector("h1");
	const body = parsedArticle.removeChild(title).childNodes.map((e) => e.outerHTML);
	console.log(body.join(""));
	const article = { body: body.join(""), title: title ? title.outerHTML : "Missing title", tags: ["placeholder"] };

	const CreateArticle = await db.all(
		"INSERT INTO articles (article) VALUES (?)",
		[JSON.stringify(article)],
		(err, row) => {
			err ? console.log(err) : console.log(req.body, "created article");
		}
	);
	res.send({ msg: "create ok" });
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
	console.log(req.body.article);

	const editArticle = await db.get(
		"UPDATE articles SET article = ? WHERE article_id = ?",
		[JSON.stringify(req.body.article), req.body.id],
		(err, row) => {
			if (err) console.log(err);
			// console.log(row);
			res.send("edit ok");
		}
	);
}

module.exports = { editArticle, getArticles, getArticle, createArticle, deleteArticle };
