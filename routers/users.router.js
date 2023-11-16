const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");
const authMiddleware = require("../utils/auth.middleware");

router.post("/", authMiddleware.authenticateToken, userController.registrarUser);
router.get("/", userController.getUsers);
router.post("/login", userController.loginUser);

module.exports = router;