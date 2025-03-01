require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");

const formRouter = require("./routes/form");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/new", formRouter);

app.get("/", (req, res) => {
  res.send("usernames will be logged here - wip");
});

app.post("/new", (req, res) => {
  res.send("username to be saved: ", req.body.username);
});

const PORT = process.env.PORT_ENV;

app.listen(PORT, () => {
  console.log("runnig express app");
});
