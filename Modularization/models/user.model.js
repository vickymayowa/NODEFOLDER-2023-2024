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

  const User = mongoose.model('User', userSchema);

  module.exports = userSchema