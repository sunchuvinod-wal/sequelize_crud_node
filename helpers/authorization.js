const jwt = require("jsonwebtoken");

//authorization middleware for admin
async function authorization(req, res, next) {
  try {
    const token = req.headers.authorization;
    console.log("token" + token);
    if (!token) {
      return res.status(401).send("User not logged In");
    }
    const decoded = jwt.verify(token, "secretkey"); //jwt verifications
    req.user = decoded; //setting the requested user with token
    next();
  } catch (err) {
    return res.status(401).send(err);
  }
}
module.exports = authorization;
