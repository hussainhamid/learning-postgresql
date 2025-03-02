require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(255)

);

INSERT INTO usernames (username) 
VALUES 
    ('brian'),
    ('odin'),
    ('damon');

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.USER_ENV}:${process.env.PASSWORD_ENV}@${process.env.HOST_ENV}:${process.env.DATABASE_PORT_ENV}/top_users`,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
