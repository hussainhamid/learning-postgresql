require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");

const formRouter = require("./routes/form");
const renderRouter = require("./routes/renderUsername");
const deleteRouter = require("./routes/deleteRouter");
const searchRouter = require("./routes/searchRoute");
const deleteAllRouter = require("./routes/deleteAllRoute");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", renderRouter);

app.use("/new", formRouter);

app.use("/delete", deleteRouter);

app.use("/search", searchRouter);

app.use("/deleteAll", deleteAllRouter);

const PORT = process.env.PORT_ENV;

app.listen(PORT, () => {
  console.log(`runnig express app on: ${PORT}`);
});
