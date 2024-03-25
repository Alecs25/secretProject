export async function createArticle(req, res) {
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
}


export async function getArticles(req, res){
	// res.send("Hello World!");
	const posts = await db.all("SELECT * FROM articles", (err, row) => {
		res.send(row);
	});
	// console.log(posts);
	// res.send(posts);
}