const { db } = require("../initDb");

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

async function createReply(req, res) {
	console.log(req.body);
	const article_id = Number(req.params.id);
	const parent_id = Number(req.params.comment_id);

	console.log(article_id);

	const getUserid = await db.get(
		`SELECT user_id FROM users WHERE username = ? `,
		[req.body.username],
		async (err, row) => {
			const CreateComment = await db.get(
				"INSERT INTO comments (parent_id, user_id, article_id, comment) VALUES (?,?,?,?)",
				[
					parent_id,
					// row.user_id,
					1,
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

async function getReplies(req, res) {
	const article_id = Number(req.params.id);
	const parent_id = Number(req.params.comment_id);

	// console.log(parent_id);
	const posts = await db.all(
		`SELECT * FROM comments WHERE (article_id = ? AND parent_id= ?)`,
		[article_id, parent_id],
		(err, rows) => {
			if (err) {
				console.log(err);
			} else if (rows.length > 0) {
				console.log(rows);
				// console.log(typeof rows);
				res.send(rows.toReversed());
			}
			else{
				res.send({msg: "no replies to this post"})
			}
		}
	);
}

async function getComments(req, res) {
	const article_id = Number(req.params.id);

	// console.log(typeof article_id);
	const posts = await db.all(
		`SELECT * FROM comments WHERE article_id = ? AND parent_id IS NULL`,
		[article_id],
		(err, rows) => {
			if (err) {
				console.log(err);
			} else {
				// console.log(rows);
				res.send(rows.toReversed());
			}
		}
	);
}

module.exports = { createComment, getComments, getReplies, createReply };
