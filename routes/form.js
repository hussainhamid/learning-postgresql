const { Router } = require("express");

const formRouter = Router();

formRouter.get("/", (req, res) => {
  res.render("form", { name: "hussain" });
});

module.exports = formRouter;
