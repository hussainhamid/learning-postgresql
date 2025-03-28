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

async function searchUsername(user) {
  const result = await pool.query(
    "SELECT * FROM usernames WHERE username LIKE ($1)",
    [`%${user}%`]
  );

  return result;
}

async function deleteDB() {
  await pool.query("TRUNCATE TABLE usernames");
}

module.exports = {
  getAllUsernames,
  insertUsernames,
  deleteUsername,
  searchUsername,
  deleteDB,
};
