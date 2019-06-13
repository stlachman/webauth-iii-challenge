const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/users-model.js");
const secrets = require("../config/secrets.js");

router.post("/register", validateRegistration, (req, res) => {
  const user = req.body;

  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(savedUser => {
      const token = generateToken(user);
      res.status(201).json({ savedUser, token });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  Users.findUser({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome ${user.username}`,
          token
        });
      } else {
        res.status(401).json({ message: "You shall not pass!" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id, // standard claim = sub
    username: user.username // additional data
  };

  const options = {
    expiresIn: "8h"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

function validateRegistration(req, res, next) {
  const user = req.body;
  if (user && user.username && user.password && user.department) {
    next();
  } else {
    res.status(400).json({
      message:
        "A username, password, and department is required to create an account"
    });
  }
}

module.exports = router;
