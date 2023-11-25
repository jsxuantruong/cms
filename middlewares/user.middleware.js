const { db } = require("../utils/database");

module.exports.checkExisted = (req, res, next) => {
  let { email } = req.body;
  db.execute("Select * from users where email=?", [email])
    .then((data) => {
      let [users] = data;
      if (users.length === 0) {
        res.status(404).json({
          message: "email nay chua ton tai",
          
        });
      } else {
        next();
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "fail to get users rrrrrrrrrr",
        error: err,
      });
    });
};
