const express = require("express");
const app = express();
const cors = require("cors");
const {
	createArticle,
	getArticles,
	deleteArticle,
	getArticle,
	editArticle,
} = require("./controllers/articles-controller.js");

// Opzioni express --

const port = 3000;

app.listen(port, () => {
	console.log(`In ascolto su porta ${port}`);
});

//Lettura JSON
app.use(express.json());

// CORS
app.use(cors());

// Fine opzioni express --

app.get("/articles", async (res, req) => await getArticles(res, req));

app.get("/article/:id", async (res, req) => await getArticle(res, req));

app.get("/admin/article/:id", async (res, req) => await getArticle(res, req));

app.post("/admin/editarticle/:id", async (res, req) => await editArticle(res, req));

app.post("/createArticle", async (res, req) => await createArticle(res, req));

app.delete("/article/:id", async (res, req) => await deleteArticle(res, req));

// db.close();
