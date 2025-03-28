const { Router } = require("express");

const {
  deleteUsernameController,
  deleteFormRender,
  deleteDBController,
} = require("../controllers/controller");

const deleteRouter = Router();

const deleteAllRouter = Router();

deleteRouter.get("/", deleteFormRender);

deleteRouter.post("/", deleteUsernameController);

deleteAllRouter.get("/", deleteDBController);

module.exports = deleteRouter;
