const express = require("express");
const router = express.Router();
const { checkExisted } = require("../middlewares/user.middleware");
const { db } = require("../utils/database");
const { getAllUser } = require("../controllers/user.controller");
const { getOneUser } = require("../controllers/user.controller");
const { postUser } = require("../controllers/user.controller");
const { putUser } = require("../controllers/user.controller");
const { deleteUser } = require("../controllers/user.controller");
const { checkCookie } = require("../middlewares/auth.middlewares");

router.get("/", getAllUser);

router.get("/:id", checkExisted, getOneUser);
router.post("/",checkExisted,  postUser);
router.put("/:id", checkExisted, putUser);
router.delete("/:id", checkExisted, deleteUser);

module.exports = router;
