const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db.js");
const userRoute = require("./routes/user.route.js");
dotenv.config();
const PORT = process.env.PORT || 5500;
connectDB();
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use("/", userRoute);
app.use("/api/register", userRoute);
app.use("/api/login", userRoute);
app.use("/api/logout", userRoute)

app.listen(PORT,()=>{console.log(`Server is running on ${PORT}`)})

// const isBrowser = typeof window === 'object' && typeof document === 'object'
// console.log(isBrowser);

// const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node !== null
// console.log(isNode);
