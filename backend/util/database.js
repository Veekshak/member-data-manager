import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "member-data-trial",
  password: "x6*Kx57SM-jX9n$h8fvA",
});

export default pool.promise();
