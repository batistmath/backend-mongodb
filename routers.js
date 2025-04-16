const express = require("express");
const router = express.Router();

const UserController = require("./controller/user.Controller");

router.get("/ping", (req, res) => {
  res.json({ retorno: "true" });
});

router.get("/states", UserController.getStates);
router.get("/users", UserController.getUser);

module.exports = router;
