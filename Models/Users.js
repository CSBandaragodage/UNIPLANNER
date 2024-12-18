const mongoose = require('mongoose');

// Define the users schema
const UsersSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, required: true }, // admin, student, or lecturer
});

// Create a model for the users schema and connect it to the 'Users' collection
const UsersModel = mongoose.model('User', UsersSchema, 'Users');

module.exports = UsersModel;
