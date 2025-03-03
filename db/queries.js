const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsernames(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteUsername(id) {
  await pool.query("DELETE FROM usernames WHERE id = ($1)", [id]);
}

module.exports = {
  getAllUsernames,
  insertUsernames,
  deleteUsername,
};
