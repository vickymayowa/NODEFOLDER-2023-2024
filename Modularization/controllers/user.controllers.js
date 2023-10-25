const userModel = require("../models/user.model")

const userWelcome = (req, res) => {
  res.send([{ Message: "Welcome to Our Website" }]);
};

// const register = (req, res) => {
//   res.send([{ Message: "Invalid Credentails : No token" }]);
//   console.log("Invalid Credentails : No token")
//   console.log(req.body);
//   let user = new Users(req.body)
//   user.save()
//   .then((response)=>{
//     console.log(`UserSaved: ${response}`);
//   })
//   .catch((error)=>{
//     console.log(`Error Creating User : ${error}`);
//   })
// };

const register = (req,res)=>{
  let form = new userModel(req.body)
  console.log(form);
  // let form = new userModel({name: "Elo"})
  form.save()
    .then((user) => {
      console.log(`UserSaved: ${user}`);
      res.status(201).json({ message: 'User registered successfully' });
    })
    .catch((error) => {
      console.error(`Error Creating User: ${error}`);
      res.status(500).json({ message: 'Error creating user' });
    });

}

const login = (req, res) => {
  res.send([{ Message: "Not Authorized : No token" }]);
  console.log("Not Authorized : No token" )
};

const logout = (req, res) => {
  res.send([{ Message: "Log out SuccessFully:" }]);
  console.log("Log out SuccessFully:");
};


module.exports = { userWelcome, register, login , logout};
