const { db } = require("../initDb");

// `CREATE TABLE comments(
//  			comment_id INTEGER PRIMARY KEY AUTOINCREMENT ,
// 			parent_id INTEGER,
// 			user_id INTEGER NOT NULL,
// 			FOREIGN KEY(user_id) REFERENCES users(user_id),
// 			comment JSON NOT NULL)`

async function createComment(req, res) {
	// console.log(req.body);
	const article_id = Number(req.params.id);
	// console.log(article_id);

	const getUserid = await db.get(
		`SELECT user_id FROM users WHERE username = ? `,
		[req.body.username],
		async (err, row) => {
			const CreateComment = await db.get(
				"INSERT INTO comments (parent_id, user_id, article_id, comment) VALUES (?,?,?,?)",
				[
					req.body.parent_id,
					row.user_id,
					article_id,
					JSON.stringify({
						username: req.body.username,
						date: req.body.date,
						message: req.body.message,
					}),
				],
				(err, row) => {
					err ? console.log(err) : null;
				}
			);

			res.send({ msg: "create ok" });
		}
	);
}

async function getComments(req, res) {
	const article_id = Number(req.params.id);
	console.log(typeof article_id);
	const posts = await db.all(`SELECT * FROM comments WHERE article_id = ?`, [article_id], (err, rows) => {
		err ? console.log(err) : null;
		res.send(rows.toReversed());
	});
}

module.exports = { createComment, getComments };
