const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");
const { logIn, signUpAndLogin } = require("./controllers/users-controller.js");
const {
	createArticle,
	getArticles,
	deleteArticle,
	getArticle,
	editArticle,
} = require("./controllers/articles-controller.js");

// Opzioni express --
//passport
app.use(passport.initialize());

const port = 3000;

app.listen(port, () => {
	console.log(`In ascolto su porta ${port} 
	\n************** Rigenerare il DB? 1+invio=si, invio=no **************`);
});

//Lettura JSON
app.use(express.json());

// CORS
app.use(cors());

// Fine opzioni express --

// ROUTES articoli
app.get("/articles", (res, req) => getArticles(res, req));

app.get("/article/:id", (res, req) => getArticle(res, req));

app.get("/admin/article/:id", (res, req) => getArticle(res, req));

app.post("/admin/editarticle/:id", (res, req) => editArticle(res, req));

app.post("/createArticle", (res, req) => createArticle(res, req));

app.delete("/article/:id", (res, req) => deleteArticle(res, req));

//ROUTES users
app.post("/user/login", (req, res) => logIn(req, res));

app.post("/user/signup", (req, res) => signUpAndLogin(req, res));


app.listen(port, () => {
	console.log(`In ascolto su porta ${port} 
	\n************** Rigenerare il DB? 1+invio=si, invio=no **************`);
});