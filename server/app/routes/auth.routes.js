const { verifySignUp } = require("../middleware");
var bcrypt = require("bcryptjs");
const db = require("../models");
var jwt = require("jsonwebtoken");
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
    // res.send({ message: "connected" });
    try {
      // const tags = await Tags.updateMany({});
      res.send({ message: "Connected" });
    } catch (error) {
      res.status(500).send({ err: err });
    }
  });
  app.post(
    "/auth/signup",
    [verifySignUp.checkDuplicateEmail],
    async (req, res) => {
      //save to db
      try {
        const { firstname, lastname, email, password, role } = req.body;
        if (!firstname || !lastname || !email || !password || !role) {
          return res.status(400).send({ error: "please add all the fields" });
        }
        console.log(role === "Student", role === "student", role);
        if (role === "Student" || role === "student") {
          const student = new Student({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 8),
            role: "student",
          });
          await student.save();
          res
            .status(200)
            .send({ message: "Student was registered successfully!" });
        } else if (role === "Teacher" || role === "teacher") {
          const teacher = new Teacher({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 8),
            role: "teacher",
          });
          await teacher.save();
          res
            .status(200)
            .send({ message: "Teacher was registered successfully!" });
        } else if (role === "Admin" || role === "admin") {
          const admin = new Admin({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 8),
            role: "admin",
          });
          await admin.save();
          res
            .status(200)
            .send({ message: "Admin was registered successfully!" });
        } else {
          return res
            .status(422)
            .send({ message: "Select Role from Student and Teacher or Admin" });
        }
      } catch (err) {
        res.status(500).send({ err: err });
      }
    }
  );

  app.post("/auth/signin", async (req, res) => {
    try {
      const { email, password, role } = req.body;
      if (!password || !email || !role) {
        return res.status(400).send({ error: "please add all the fields" });
      }

      if (role === "Student" || role === "student") {
        const student = await Student.findOne({ email: req.body.email });
        if (!student) {
          return res.status(404).send({ message: "User Not Found" });
        }
        const passwordIsValid = bcrypt.compareSync(
          req.body.password,
          student.password
        );
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!",
          });
        }
        var token = jwt.sign({ id: student.id }, JWT, {
          expiresIn: 86400, // 24 hours
        });
        console.log(student);
        res.status(200).send({
          id: student._id,
          name: student.name,
          email: student.email,
          role: student.role,
          accessToken: token,
        });
      } else if (role === "Teacher" || role === "teacher") {
        const teacher = await Teacher.findOne({ email: req.body.email });
        if (!teacher) {
          return res.status(404).send({ message: "User Not Found" });
        }

        const passwordIsValid = bcrypt.compareSync(
          req.body.password,
          teacher.password
        );
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!",
          });
        }
        var token = jwt.sign({ id: teacher.id }, JWT, {
          expiresIn: 86400, // 24 hours
        });
        res.status(200).send({
          id: teacher._id,
          name: teacher.name,
          email: teacher.email,
          role: teacher.role,
          accessToken: token,
        });
      } else if (role === "Admin" || role === "admin") {
        const admin = await Admin.findOne({ email: req.body.email });
        if (!admin) {
          return res.status(404).send({ message: "User Not Found" });
        }

        const passwordIsValid = bcrypt.compareSync(
          req.body.password,
          admin.password
        );
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!",
          });
        }
        var token = jwt.sign({ id: admin.id }, JWT, {
          expiresIn: 86400, // 24 hours
        });
        res.status(200).send({
          id: admin._id,
          name: admin.name,
          email: admin.email,
          role: admin.role,
          accessToken: token,
        });
      } else {
        //may need to remove
        return res
          .status(422)
          .send({ message: "Select Role from Student and Teacher or Admin" });
      }
    } catch (err) {
      res.status(500).send({ err: err });
    }
  });
};
