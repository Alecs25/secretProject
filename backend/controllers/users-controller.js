require("dotenv").config();
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { db } = require("../initDb");

async function logIn(req, res) {
	// console.log(req.body);
	const { username, password } = req.body;

	const user = await new Promise((res, rej) => {
		db.get("SELECT * FROM users WHERE username = ?", [username], (err, row) => {
			err ? res(false) : res(row);
		});
	});
	//console.log(user);

	if (user) {
		const payload = {
			id: user.user_id,
			user: user.username,
		};

		const token = jwt.sign(payload, process.env.secret);
		const authenticateUser = await db.run("UPDATE users SET token = ? WHERE username = ?", [token, username]);
		res.json({ token: token, username: user.username, isAdmin: user.isAdmin });
	} else {
		res.status(401).send({ msg: "invalid credentials" });
	}
}

async function signUp(req, res) {
	console.log(req.body);
	const { username, password } = req.body;
	if (username && password) {
		const isUsernameAvailable = await db.get("SELECT * FROM users WHERE username = ?", [username], async (err, row) => {
			if (!row) {
				console.log(row);
				console.log(err);
				console.log(isUsernameAvailable);

				res.status(400).send({ msg: "Utente già esistente" });
				return;
			} else {
				const createUser = await db.get("INSERT INTO users VALUES (?, ?, ?, ?)", [null, username, password, false]);
				const user = await db.get("SELECT * FROM users WHERE username = ?", [username]);
				const payload = {
					id: user.user_id,
					user: user.username,
				};
				const token = jwt.sign(payload, process.env.secret);
				const authenticateUser = await db.run("UPDATE users SET token = ? WHERE username = ?", [token, username]);
				res.status(200).send({ msg: "user created", token: token });
			}
		});
	}
}

module.exports = { logIn, signUp };
