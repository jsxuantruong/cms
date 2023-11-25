const { db } = require("../utils/database");
const { findAll } = require("../models/user.model");
const { findOne } = require("../models/user.model");
const { putModel } = require("../models/user.model");

module.exports.getAllUser = function (req, res) {
  let data = findAll();
  data
    .then((users) => {
      res.status(200).json({
        users: users[0],
        message: "successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "fail to get users",
        error: err,
      });
    });
};
module.exports.getOneUser = function (req, res) {
  let { id } = req.params;
  findOne(id)
    .then((data) => {
      let [users] = data;

      res.status(200).json({
        users: users[0],
        message: "successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "fail to get users",
        error: err,
      });
    });
};
module.exports.postUser = function (req, res) {
  let { id, username, email, address, phone, website } = req.params;
  let data = putModel(id, username, email, address, phone, website);

  data
    .then((users) => {
      res.status(200).json({
        message: "create data successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "fail to get users",
        error: err,
      });
    });
};

module.exports.putUser = function (req, res) {
  let data = db.execute(`update users 
        set id='${req.body.id}',name=' ${req.body.name}', username='${req.body.username}', email='${req.body.email}',address='${req.body.address}',phone='${req.body.phone}',website='${req.body.website}' where id = ${req.params.id} `);
  data
    .then((users) => {
      res.status(200).json({
        message: "update data successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "fail to get users",
        error: err,
      });
    });
};
module.exports.deleteUser = function (req, res) {
  let data = db.execute(`DELETE FROM users where id = ${req.params.id} `);
  data
    .then((users) => {
      res.status(200).json({
        message: "delete data successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "fail to get users",
        error: err,
      });
    });
};
