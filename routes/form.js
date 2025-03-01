const { Router } = require("express");
const { createUsernameGet } = require("../controllers/controller");
const { createUsernamePost } = require("../controllers/controller");

const formRouter = Router();

formRouter.get("/", createUsernameGet);

formRouter.post("/", createUsernamePost);

module.exports = formRouter;
