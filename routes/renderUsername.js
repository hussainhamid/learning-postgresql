const { Router } = require("express");
const { getUsernames } = require("../controllers/controller");

const renderRouter = Router();

renderRouter.get("/", getUsernames);

module.exports = renderRouter;
