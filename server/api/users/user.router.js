const router = require("express").Router();
const {
  createUser,
    getUsers,
    getUserById,
    login,
} = require("./user.controller");
const auth = require("../middleware/auth");

router.post("/", createUser);
router.get("/all", getUsers);
router.get("/", auth, getUserById);
router.post("/login", login);

module.exports = router;
