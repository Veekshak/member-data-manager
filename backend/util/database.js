import mysql from "mysql2";
import { config } from "dotenv";

config({
  path: "../config.env",
});

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_KEY,
});

export default pool.promise();
