const { Router } = require("express");

const {
  searchUsernameController,
  searchFormRender,
} = require("../controllers/controller");

const searchRouter = Router();

searchRouter.get("/", searchFormRender);

searchRouter.post("/", searchUsernameController);

module.exports = searchRouter;
