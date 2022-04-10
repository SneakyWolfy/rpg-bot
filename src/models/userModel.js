const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

userSchema.index({ userId: 1 });
userSchema.virtual("reminders", {
  ref: "Reminder",
  foreignField: "userRef",
  localField: "_id",
});

const User = mongoose.model("User", userSchema);
exports.User = User;
