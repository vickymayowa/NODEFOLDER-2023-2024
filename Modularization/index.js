const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const PORT = process.env.PORT || 5500;

const userRoute = require("./routes/user.route.js");

const corsOptions = { origin: "http://localhost:5173" };
app.use(cors(corsOptions));

app.use("/", userRoute);
app.use("/api/register", userRoute);
app.use("/api/login", userRoute);

app.listen(PORT,()=>{console.log(`Server is running on ${PORT}`)})
