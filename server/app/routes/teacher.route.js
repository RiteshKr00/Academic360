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

  app.get("/ping", async (req, res) => {
    try {
      res.send({ message: "Connected" });
    } catch (error) {
      res.status(500).send({ err: err });
    }
  });
  app.post(
    "/markattendence",
    [authJwtTeacher.verifyToken, authJwtTeacher.verifyTeacher],
    async (req, res) => {
      try {
        const { attendence, date, studentId, subjectCode } = req.body;
        if (!attendence || !date || !studentId) {
          return res.status(400).send({ message: "Enter attendence details" });
        }
        console.log(attendence, date, studentId, req.userId);
        const attended = new Attendence({
          attendence,
          date,
          subjectCode,
          studentId,
        });
        await attended.save();

        res.status(200).send({ message: "Attendence Marked" });
      } catch (err) {
        res.status(500).send({ err: err });
      }
    }
  );

  app.post("/getattendence", async (req, res) => {
    try {
      const { studentId } = req.body;
      if (!studentId) {
        return res.status(400).send({ message: "Enter student details" });
      }
      const attended = await Attendence.find({ studentId }).sort("-date");
      //for present only
      // const attended = await Attendence.find({
      //   $and: [{ studentId }, { attendence: true }],
      // })
      // await attended.save();
      // const tags = await Tags.updateMany({});

      return res.status(200).send(attended);
    } catch (err) {
      res.status(500).send({ err: err });
    }
  });
  app.post("/tupdateDetails", async (req, res) => {
    try {
      res.status(200).send({ message: "" });
    } catch (err) {
      res.status(500).send({ err: err });
    }
  });
  app.get("/tprofile", async (req, res) => {
    try {
      return res.status(200).send("");
    } catch (err) {
      res.status(500).send({ err: err });
    }
  });
};
