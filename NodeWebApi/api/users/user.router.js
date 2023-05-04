const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser
} = require("./user.controller");
router.get("/allusers",checkToken, getUsers);
router.post("/register",checkToken, createUser);
router.get("/:id", getUserByUserId);
router.post("/login", login);
router.patch("/update", updateUsers);
router.delete("/delete",checkToken, deleteUser);

module.exports = router;
