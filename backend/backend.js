import pgPromise from "pg-promise";
const db = pgPromise()("postgres");

const User = async () => {
	await db.none(`CREATE TABLE   users(
    user_id SERIAL PRIMARY KEY,
    username  varchar(32) NOT NULL,
    password varchar(32) NOT NULL,
    gender TEXT VARCHAR (1) NOT NULL,
    birth DATE,
    email VARCHAR (319) NOT NULL,
    isAdmin Boolean ,
    )`);
};
const Admin = async () => {
	await db.none(`CREATE TABLE Admin(
    user_id INTEGER PRIMARY KEY,
    username  TEXT NOT NULL,
    password TEXT NOT NULL,
    gender   TEXT VARCHAR (20) NOT NULL,
    age  INTEGER NOT NULL,
    birth DATE,
    email VARCHAR (319) NOT NULL,
     )`);
};

const Article = async () => {
	await db.none(`CREATE TABLE   Article(
    Article_id INTEGER PRIMARY KEY,
    admin_id INTEGER,
    titoloTEXT NOT NULL,
    description   TEXT VARCHAR (20) NOT NULL,
     testo TEXT VARCHAR(200)NOT NULL,
    IMG VARCHAR(100)NOT NULL,
     )`);
};
const Game = async () => {
	await db.none(`CREATE TABLE Game(
    Game_id INTEGER PRIMARY KEY,
    titolo TEXT NOT NULL,
    description   TEXT VARCHAR (120) NOT NULL,
    Genere TEXT VARCHAR(200)NOT NULL,
    IMG VARCHAR(120)NOT NULL,
    Release DATE NOT NULL
     )`);
};
const Console = async () => {
	await db.none(` CREATE TABLE Console(
    Console_id INTEGER PRIMARY KEY,
    titolo TEXT NOT NULL,
    description   TEXT VARCHAR (120) NOT NULL,
    IMG VARCHAR(120)NOT NULL,
    Release DATE NOT NULL
     )`);
};

