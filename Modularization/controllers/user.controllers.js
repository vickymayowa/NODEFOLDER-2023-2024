const userModel = require("../models/user.model")
const nodemailer = require('nodemailer');

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
  form.save()
    .then((user) => {
      res.status(201).json({ message: 'User registered successfully' });
      // res.send({status:true , message:'User registered successfully'})
      console.log(user)
    })
    .catch((error) => {
      console.log(error.message)
    });

}

const login = ( req, res )=>{
  let {email, password } = req.body
  userModel.findOne({email:email})
  .then((user)=>{
    user.compareUser(password,(err,result)=>{
      console.log(result);
      if (result) {
        res.send({status:true,message:"User Found"})
      } else {
        res.send({status : false ,message:"User Not Found"})
      }
    })
  })
  .catch((err)=>{
    console.log(`User Not found : ${err}`)
  })
}

const html = `
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
    <div style="text-align: center; padding-bottom: 20px;">
        <h1 style="color: #333; font-size: 28px; margin-bottom: 10px;">Email Verification</h1>
        <p style="color: #666; font-size: 16px;">A creative email template for website registration.</p>
    </div>

    <div style="background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <p style="color: #333; font-size: 16px;">Thank you for registering on our website! To complete the registration process, please click the button below to verify your email address:</p>
        <a style="display: inline-block; padding: 10px 20px; background-color: #3490dc; color: #fff; text-decoration: none; border-radius: 4px; margin-top: 10px;" href="edu.sqi.ng" class="verification-link">Verify Email</a>
    </div>

    <div style="text-align: center; padding-top: 20px;">
        <p style="color: #666; font-size: 16px;">If you did not sign up for our website, please ignore this email.</p>
    </div>
    </div>
  `

const dashboard = (req,res)=>{
  console.log(res);
}
const sendMail = (req,res)=>{
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASSWORD,
    }
  });
  
  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: 'favouradebanjo603@gmail.com,',
    subject: 'Welcome to Digital Sub',
    html : html   
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
const logout = (req, res) => {
  res.send([{ Message: "Log out SuccessFully:" }]);
  console.log("Log out SuccessFully:");
};


module.exports = { userWelcome, register, login , logout , dashboard , sendMail};
