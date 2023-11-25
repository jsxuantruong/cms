const { db } = require("../utils/database");
module.exports.findAll = function () {
  return db.execute("Select * from users");
};
module.exports.findOne = function (id) {
  return db.execute(`select * from users where id = ${id}`);
};
module.exports.findByEmail = function (email) {
  return db.execute(`select * from users where email= ${email}`);
};
module.exports.createOne = function (
 
  email,
  password
) {
  return db.execute(`INSERT INTO users (email,password)
    VALUES ('${email}','${password}') `);
};
