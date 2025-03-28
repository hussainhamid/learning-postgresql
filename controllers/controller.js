const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  res.render("renderUsers", { usernames });
}

async function createUsernameGet(req, res) {
  res.render("form");
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsernames(username);
  console.log(username);
  res.redirect("/");
}

async function deleteFormRender(req, res) {
  res.render("deleteForm");
}

async function deleteUsernameController(req, res) {
  const { delId } = req.body;
  await db.deleteUsername(delId);
  res.redirect("/");
}

async function searchFormRender(req, res) {
  res.render("searchForm");
}

async function searchUsernameController(req, res) {
  const { searchId } = req.body;

  const result = await db.searchUsername(searchId);

  res.render("renderSearchUsers", { usernames: result.rows });
}

async function deleteDBController(req, res) {
  await db.deleteDB();

  res.redirect("/");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteUsernameController,
  deleteFormRender,
  searchFormRender,
  searchUsernameController,
  deleteDBController,
};
