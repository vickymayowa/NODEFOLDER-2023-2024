const userWelcome = (req, res) => {
  res.send([{ Message: "Welcome to Our Website" }]);
};

const register = (req, res) => {
  res.send([{ Message: "Not Authorized : No token" }]);
};
const login = (req, res) => {
  res.send([{ Message: "Invalid Credentails : No token" }]);
};


module.exports = { userWelcome, register, login };
