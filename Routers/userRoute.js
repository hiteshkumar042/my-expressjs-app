const express = require("express");
const route = express.Router();
const { getAllUser, getUserById, adduser, deleteuser } = require("../controllers/userController")

route.get("/", getAllUser);

route.get("/:id", getUserById)

route.post("/", adduser)

route.delete("/:id", deleteuser)

module.exports = route;