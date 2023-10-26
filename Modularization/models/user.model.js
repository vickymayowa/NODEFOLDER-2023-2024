const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    fullname: { 
      type: String, 
      required: true, 
    },
    email: { 
      type: String,
      required: true, 
      unique: true 
    },
    username: { 
      type: String, 
      required: true,
      unique : true,
    },
    password : { 
      type: String,
      required : true,
    },
  });

  let saltRound = 10 

  userSchema.pre("save",function (next){
    bcrypt.hash( this.password , saltRound, (err, hash)=>{
      if(err){
        console.log(err)
      }else{
        console.log(hash)
        this.password = hash
        next()
      }
    })
  })
// const users = mongoose.model('User', userSchema);
const userModel = mongoose.model('User' ,userSchema);
module.exports = userModel