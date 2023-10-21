const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config();

const PORT = process.env.PORT || 5500;

const userRoute = require("./routes/user.route.js");

const corsOptions = { origin: 'http://localhost:5173' };
app.use(cors(corsOptions));

app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("Welcome to our Home page");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
