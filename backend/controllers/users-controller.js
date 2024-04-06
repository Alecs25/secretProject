require("dotenv").config();
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { db } = require("../initDb");

async function logIn(req, res) {
	console.log(req.body);
	const { username, password } = req.body;
	const user = await db.run("SELECT * FROM users WHERE username = ?", username);

	if (username === user.username && password === user.password) {
		const payload = {
			id: user.user_id,
			user: user.username,
		};

		const token = jwt.sign(payload, process.env.secret);
		const authenticateUser = await db.run("UPDATE users SET token = ? WHERE username = ?", [token, username]);
		res.json({ token });
	} else {
		res.status(401).send("Invalid credentials");
	}
}

async function signUpAndLogin(req, res) {
	console.log(req.body);
	const { username, password } = req.body;

	const isUsernameAvailable = await db.get("SELECT * FROM users WHERE username = ?", [username], async (err, row) => {
		if (row) {
			res.status(400).send({ msg: "user already exists" });
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

module.exports = { logIn, signUpAndLogin };
