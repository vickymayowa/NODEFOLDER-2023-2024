const userWelcome = (req, res) => {
  res.send([{ Message: "Welcome to Our Website" }]);
};

const register = (req, res) => {
  res.send([{ Message: "Invalid Credentails : No token" }]);
};
const login = (req, res) => {
  res.send([{ Message: "Not Authorized : No token" }]);
};

const logout = (req, res) => {
  res.send([{ Message: "Log out SuccessFully:" }]);
};


module.exports = { userWelcome, register, login , logout};
