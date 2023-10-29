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
  console.log(form)
  form.save()
    .then((user) => {
      res.status(201).json({ message: 'User registered successfully' });
      // res.send({status:true , message:'User registered successfully'})
      console.log(user)
    })
    .catch((error) => {
      console.log(error)
    });

}

const login = (req,res)=>{
  console.log("Kindly input your details")
}


const logout = (req, res) => {
  res.send([{ Message: "Log out SuccessFully:" }]);
  console.log("Log out SuccessFully:");
};


module.exports = { userWelcome, register, login , logout};
