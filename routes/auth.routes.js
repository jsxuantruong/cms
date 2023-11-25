const express = require("express");
const router = express.Router();
const { validateBody } = require("../middlewares/auth.middlewares");
const { checkExisted } = require("../middlewares/user.middleware");
const bcrypt = require("bcryptjs");
const { createOne,findByEmail } = require("../models/user.model");

router.post("/register", validateBody, (req, res) => {
  let { email, password } = req.body;
  //check xem user dax ton tai hay chua
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);
  console.log(hash);
  createOne(email, hash)
    .then((data) => {
      res.status(201).json({
        message: "them moi thanh cong",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });

  //luu vao trong csdl

  //res ve cho nguoi dung dki thanh cong
});

router.post("/login", validateBody, (req, res) => {
  let { email, password } = req.body;

  findByEmail(email)
    .then((data) => {
      console.log(data);
     let user =data[0][0]
     let hashResult = bcrypt.compareSync(password,user.password)
     if(hashResult){
      res.cookie("authenticated",true)
      res.status(200).json({
       status:"succsess",
       message:"login success fully"
      });
     } else{
      res.status(400).json({
        message:"sai mat khau"
      });
     }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
  })

  // tk mk trung vs csdl

  //phan hoi dang nhap thanh cong

  //dieu huong sang 1 trang nao do
});
module.exports = router;
