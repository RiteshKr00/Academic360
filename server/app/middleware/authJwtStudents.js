const jwt = require("jsonwebtoken");
const JWT = process.env.JWT_SEC;
const db = require("../models");
const Student = db.student;

verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];
  console.log(token);
  if (!token) {
    return res.status(403).send({ message: "No token Provided" });
  }
  jwt.verify(token, JWT, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};
verifyStudent = async (req, res, next) => {
  try {
    const student = await Student.findById(req.userId).select("-password");
    console.log(student);
    if (student) {
      if (student.role === "Student" || student.role === "student") {
        next();
        return;
      }
    }
    res.status(403).send({ message: "Login With Student Role!" });
    return;
  } catch (err) {
    res.status(500).send({ err: err });
  }
};

const authJwtStudent = {
  verifyToken,
  verifyStudent,
};
module.exports = authJwtStudent;
