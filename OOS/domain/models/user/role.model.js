const mongoose = require("mongoose");
const roleSchema = new mongoose.Schema({
  name: String
});
roleSchema.set('toObject', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
      delete ret._id
  }
});

const Role = mongoose.model(
  "Role",
  roleSchema
);
module.exports = Role;