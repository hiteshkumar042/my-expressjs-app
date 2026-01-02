const express = require("express");
// let users = require("../data/users")

const { getAllUser, getUserById, adduser, deleteuser } = require("../controllers/userController")

const route = express.Router();


route.get("/", getAllUser);

route.get("/:id", getUserById)

route.post("/", adduser)

route.delete("/:id", deleteuser)



module.exports = route;