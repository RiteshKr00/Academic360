const { verifySignUp, authJwtTeacher } = require("../middleware");
const db = require("../models");
var jwt = require("jsonwebtoken");
const authJwtStudent = require("../middleware/authJwtStudents");
const Attendence = db.attendence;
const Student = db.student;
const Teacher = db.teacher;
const Admin = db.admin;
const JWT = process.env.JWT_SEC;
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/supdateDetails", async (req, res) => {
    try {
      res.status(200).send({ message: "" });
    } catch (err) {
      res.status(500).send({ err: err });
    }
  });

  app.get("/sprofile", async (req, res) => {
    try {
      return res.status(200).send("");
    } catch (err) {
      res.status(500).send({ err: err });
    }
  });
};
