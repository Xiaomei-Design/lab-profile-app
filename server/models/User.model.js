const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  campus: {
      type: String,
      enum: ["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "México", "Sao Paulo", "Lisbon"]
  },
  course: {
      type: String,
      enum: ["Web Dev", "UX/UI", "Data Analytics"]
  },
  image: String
  // owner will be added later on
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
