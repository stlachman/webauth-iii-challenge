const router = require("express").Router();
const bcyrpt = require("bcryptjs");

const Users = require("../users/users-model.js");

router.post("/register", validateRegistration, (req, res) => {
  const user = req.body;

  const hash = bcyrpt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(savedUser => {
      res.status(201).json(savedUser);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

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
