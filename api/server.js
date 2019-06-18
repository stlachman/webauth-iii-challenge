const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send("it's working!");
});

server.use("/api", authRouter);
server.use("/api/users", usersRouter);

module.exports = server;
