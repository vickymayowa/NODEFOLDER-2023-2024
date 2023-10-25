const mongoose = require("mongoose")

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

// const users = mongoose.model('User', userSchema);
const userModel = mongoose.model('User' ,userSchema);
module.exports = userModel