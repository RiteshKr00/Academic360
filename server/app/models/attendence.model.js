const mongoose = require("mongoose");
const Attendence = mongoose.model(
  "Attendence",
  new mongoose.Schema({
    attendence: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    // date: {
    //   type: Object,
    //   day: Number,
    //   required: true,
    // },
    subjectCode: {
      type: String,
      required: true,
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
  })
);

module.exports = Attendence;
