const mongoose = require("mongoose");

const Subject = mongoose.model(
  "Subject",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    semester: {
      type: String,
    //   required: true,
    },
  })
);

module.exports = Subject;