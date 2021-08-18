const express = require('express')
const router = express.Router()
const userCtrl = require('../controller/userController')
// Authentication 用户登录
router.post("/users/login", userCtrl.login);

// Registration 用户注册
router.post("/users", userCtrl.register);

// Get Current User 获取当前登录用户
router.get("/user", userCtrl.getAllUser);

// 查询某一个用户
router.get("/user/:id", userCtrl.getUserById);

// Update User 更新用户
router.put("/user", userCtrl.updateUser);

module.exports = router