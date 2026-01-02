require('dotenv').config();

const express = require("express");
const app = express();

app.use(express.json());

const userRouter = require("./Routers/userRoute");
const authRouter = require("./Routers/authRoute")
const authMiddleware = require("./middlewares/authMiddleware")

const PORT = process.env.PORT || 3000;

app.use("/", authRouter)
app.use("/users", authMiddleware, userRouter);


app.listen(PORT, () => {
    console.log("Server Listening on PORT: ", PORT);
})