import db from "../util/database.js";
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
      "DELETE from `members-table-1` WHERE `members-table-1`.id = ?",
      [id]
    );
  }

  updateById(id) {
    return db.execute(
      "UPDATE `members-table-1` SET id=?, name=?, address=?, phone_number=?, father_name=?, date=?, cur_state=?, dir=? WHERE `members-table-1`.id = ?",
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
      "SELECT * from `members-table-1` WHERE `members-table-1`.id = ?",
      [id]
    );
  }

  save() {
    return db.execute(
      "INSERT INTO `members-table-1` (id,name,address,phone_number,father_name,date,cur_state,dir) VALUES (?,?,?,?,?,?,?,?)",
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
      "SELECT name, dir FROM `members-table-1` WHERE `members-table-1`.cur_state=? ORDER BY id",["director"]
    );
  }

  fetchAll() {
    return db.execute("SELECT * FROM `members-table-1` ORDER BY id");
  }
}
