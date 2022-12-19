const mongoose = require("mongoose");

const Teacher = mongoose.model(
  "Teacher",
  new mongoose.Schema({
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
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "teacher", "admin"],
      default: "teacher",
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
    salary: {
      type: Number,
    },
    subjectTaught: [{}],
  })
);

module.exports = Teacher;
