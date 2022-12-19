const db = require("../models");
const Teacher = db.teacher;
const Student = db.student;
const Admin = db.admin;

checkDuplicateEmail = async (req, res, next) => {
  try {
    const email1 = await Student.findOne({
      email: req.body.email,
    });

    const email2 = await Teacher.findOne({
      email: req.body.email,
    });
    const email3 = await Admin.findOne({
      email: req.body.email,
    });

    if (email1 || email2 || email3) {
      res.status(400).send({ message: "Failed! Email is already in use!" });
      return;
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: `Could Not Verify User : ${err}` });
  }

  next();
};

const verifySignUp = {
  checkDuplicateEmail,
};

module.exports = verifySignUp;
