 const uploadfile = require("..//middlewares/upload.midlewares")
const express = require("express");
const router = express.Router();
router.post("/", uploadfile, (req, res) => {
  res.status(201).json({
    status: "succses",
    link: `http://localhost:3000/images/${req.file.filename}`,
  });
});
module.exports = router;
