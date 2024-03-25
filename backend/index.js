const express = require("express");
const app = express();
const cors = require("cors");
const { createArticle, getArticles } = require("./controllers/articles-controller.js");


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


app.get("/articles", (res, req) => getArticles(res, req));

app.post("/createArticle", (res, req) => createArticle(res, req));

// db.close();


