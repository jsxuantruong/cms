const { createUser, findByProperty } = require("../models/users.models");
const bcrypt = require("bcryptjs");

module.exports.postLogin = async (req, res) => {
  let { user_email, password } = req.body;
  try {
    let result = await findByProperty("user_email", user_email);
    let [find] = result[0];
    if (result[0].length === 0) {
      res.json({ message: "User not found" });
    } else {
      let passCheck = bcrypt.compareSync(password, find.password);
      if (passCheck) {
        //gửi về một cookie để lưu thông tin đã đăng nhập
        //thành công tại trình duyệt
        // res.cookie("userId",find.user_id)
        req.session.user_id = find.user_id;
        res.json({ message: "Login successfully" });
      } else {
        res.json({ message: "Check email or password" });
      }
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports.postSignup = (req, res) => {
  let { user_email, user_name, password } = req.body;
  let salt = bcrypt.genSaltSync(10);
  let hashPassword = bcrypt.hashSync(password, salt);
  createUser(user_name, user_email, hashPassword)
    .then(() => {
      res.json({ message: "Signup successfully" });
    })
    .catch((err) => {
      res.status(500).json({ status: "fail", messs: err });
    });
};
module.exports.logout = (req, res) => {
  res.json({ message: "Logout successfully" });
};
