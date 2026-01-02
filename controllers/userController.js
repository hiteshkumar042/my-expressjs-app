const users = require("../data/users");

const getAllUser = (req, res) => {
    res.json({ users })
}


const getUserById = (req, res) => {
    const id = Number(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
};

const adduser = (req, res) => {
    const { name, email } = req.body;
    const newUser = {
        id: users.length + 1,
        name,
        email
    }
    users.push(newUser)
    res.json({ msg: "user Created" })
}



const deleteuser = (req, res) => {
    users = users.filter(user => user.id, req.body.id)

    res.json({ msg: "User Deteled" })
}

module.exports = { getAllUser, getUserById, adduser, deleteuser }