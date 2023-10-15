const express = require("express")
const app = express()

app.get("/users",(req,res)=>{
    res.send(
        [
            {
                Name:"Vickydev",
                age:30,
                matricNo: "220284",
                email:true,
            },
        ]
    )
    console.log("Welcome Dear VickyDev ")
})


port = 5000

app.listen(port,()=>{
    console.log(`Server is running on Port 5000`);
})

// last login 05/10/2023 13:10:15   