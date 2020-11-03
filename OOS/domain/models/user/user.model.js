const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role"
    }
  ]
});

userSchema.set('toObject', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
      delete ret._id
  }
})

const User = mongoose.model(
  "User",
  userSchema
);

module.exports = User;