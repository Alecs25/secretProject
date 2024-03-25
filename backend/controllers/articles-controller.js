const { db } = require("../initDb");

async function createArticle(req, res) {
	const createArticle = await db.all(
		`INSERT INTO articles VALUES (null, ${JSON.stringify(req.body.title)}, null, null, ${JSON.stringify(
			req.body.articleBody
		)})`,
		(err, row) => {
			if (err) console.log(err);
		}
	);
}

async function getArticles(req, res) {
	const posts = await db.all("SELECT * FROM articles", (err, row) => {
		res.send(row);
	});
}

module.exports = { getArticles, createArticle };
