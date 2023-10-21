const express = require("express")
const app = express()
const dotenv = require("dotenv") 
const cors = require('cors');
// const connectDB = require('./config/db.js')

dotenv.config()

const PORT = process.env.PORT || 5500;

const userRoute = require("./routes/user.route.js")
//Connect to mongodb database

// connectDB(); 
app.use("/user",userRoute)
app.use(cors());

const corsOptions = { origin: 'http://localhost:5173',};
app.use(cors(corsOptions));

app.get("/",( req,res )=>{
    res.send("Welcome to our Home page")
})

app.listen(PORT,()=>{ console.log(`Server is running on ${PORT}`)})