const { db } = require("../initDb");

// `CREATE TABLE comments(
//  			comment_id INTEGER PRIMARY KEY AUTOINCREMENT ,
// 			parent_id INTEGER,
// 			user_id INTEGER NOT NULL,
// 			FOREIGN KEY(user_id) REFERENCES users(user_id),
// 			comment JSON NOT NULL)`

async function createComment(req, res) {
	console.log(req.body);
	const { article_id } = req.params();

	// const CreateComment = await db.all(
	// 	"INSERT INTO comments (parent_id, user_id, article_id, comment) VALUES (?,?,?,?)",
	// 	[req.body.parent_id, req.body.user_id, article_id, JSON.stringify(req.body.)],
	// 	(err, row) => {
	// 		err ? console.log(err) : console.log(req.body, "created comment");
	// 	}
	// );
	res.send({ msg: "create ok" });
}

async function getComments(req, res) {
	const { article_id } = req.params();

	const posts = await db.all(`SELECT * FROM comments WHERE article_id = ${article_id}`, (err, row) => {
		res.send(row);
	});
}

module.exports = { createComment, getComments };
