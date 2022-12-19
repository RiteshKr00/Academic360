const db = {};
db.admin = require("./admin.model");
db.student = require("./students.model");
db.teacher = require("./teacher.model");
db.subject = require("./subject.model");
db.attendence = require("./attendence.model");

module.exports = db;
