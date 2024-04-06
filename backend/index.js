import { sign } from "jsonwebtoken";
import {logIn,signUp,logOut} from"./controllers/Users.js";
import authorize from "./controllers/authorize.ts"
import "./controllers/passport.ts"
const express = require("express");
const app = express();
const cors = require("cors");
const {
	createArticle,
	getArticles,
	deleteArticle,
	getArticle,
	editArticle,
} = require("./controllers/articles-controller.ts");

// Opzioni express --

const port = 3000;


//Lettura JSON
app.use(express.json());

// CORS
app.use(cors());

// Fine opzioni express --

app.get("/articles", (res, req) => getArticles(res, req));

app.get("/article/:id", (res, req) => getArticle(res, req));

app.get("/admin/article/:id", (res, req) => getArticle(res, req));

app.post("/admin/editarticle/:id", (res, req) => editArticle(res, req));

app.post("/createArticle", (res, req) => createArticle(res, req));

app.delete("/article/:id", (res, req) => deleteArticle(res, req));

app.post("/api/users/login",logIn);
app.post("/api/users/singup",signUp);
app.get("/api/users/logout",authorize,logOut);

app.listen(port, () => {
	console.log(`In ascolto su porta ${port} 
	\n************** Rigenerare il DB? 1+invio=si, invio=no **************`);
});