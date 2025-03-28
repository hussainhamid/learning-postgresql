const { Router } = require("express");

const { deleteDBController } = require("../controllers/controller");

const deleteAllRouter = Router();

deleteAllRouter.get("/", deleteDBController);

module.exports = deleteAllRouter;
