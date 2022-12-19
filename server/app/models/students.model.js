const mongoose = require("mongoose");

const Student = mongoose.model(
  "Student",
  new mongoose.Schema({
    // username: {
    //   type: String,
    //   required: true,
    // },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneno: {
      type: String,
      // required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "teacher", "admin"],
      // required: true,
    },
    dob: {
      type: Date,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
    roll: {
      type: Number,
    },
    semester: { type: Number },
    course: {
      type: String,
    },
    subjectEnrolled: [
      {
        type: String,
      },
    ],
  })
);

module.exports = Student;
