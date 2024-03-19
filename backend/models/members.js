import db from "../util/database.js";
import { config } from "dotenv";

config({
  path: "../config.env",
});
export default class Members {
  constructor(
    id,
    name,
    address,
    phone_number,
    father_name,
    date,
    cur_state,
    dir
  ) {
    this.id = id;
    this.name = name;
    this.address = address || "";
    this.phone_number = phone_number;
    this.father_name = father_name || "";
    this.date = date || "";
    this.cur_state = cur_state;
    this.dir = dir || "";
  }

  deleteById(id) {
    return db.execute(
      `DELETE from \`${process.env.TABLE_NAME}\` WHERE \`${process.env.TABLE_NAME}\`.id = ?`,
      [id]
    );
  }

  updateById(id) {
    return db.execute(
      `UPDATE \`${process.env.TABLE_NAME}\` SET id=?, name=?, address=?, phone_number=?, father_name=?, date=?, cur_state=?, dir=? WHERE \`${process.env.TABLE_NAME}\`.id = ?`,
      [
        this.id,
        this.name,
        this.address,
        this.phone_number,
        this.father_name,
        this.date,
        this.cur_state,
        this.dir,
        id,
      ]
    );
  }

  fetchById(id) {
    return db.execute(
      `SELECT * from \`${process.env.TABLE_NAME}\` WHERE \`${process.env.TABLE_NAME}\`.id = ?`,
      [id]
    );
  }

  save() {
    return db.execute(
      `INSERT INTO \`${process.env.TABLE_NAME}\` (id,name,address,phone_number,father_name,date,cur_state,dir) VALUES (?,?,?,?,?,?,?,?)`,
      [
        this.id,
        this.name,
        this.address,
        this.phone_number,
        this.father_name,
        this.date,
        this.cur_state,
        this.dir,
      ]
    );
  }

  fetchAllDir() {
    return db.execute(
      `SELECT name, dir FROM \`${process.env.TABLE_NAME}\` WHERE \`${process.env.TABLE_NAME}\`.cur_state=? ORDER BY id`,
      ["director"]
    );
  }

  fetchAll() {
    return db.execute(
      `SELECT * FROM \`${process.env.TABLE_NAME}\` ORDER BY id`
    );
  }
}
