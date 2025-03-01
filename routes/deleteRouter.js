const { Router } = require("express");

const {
  deleteUsernameController,
  deleteFormRender,
} = require("../controllers/controller");

const deleteRouter = Router();

deleteRouter.get("/", deleteFormRender);

deleteRouter.post("/", deleteUsernameController);

module.exports = deleteRouter;
