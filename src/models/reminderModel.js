const mongoose = require("mongoose");
const Reminders = require("../commands/utils/Reminders");

exports.state = {};

const reminderSchema = new mongoose.Schema(
  {
    userRef: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "User ref is required"],
    },
    body: {
      type: String,
      required: [true, "Body is required"],
    },
    dateDue: {
      type: Date,
      required: [true, "Date is required"],
    },
  },
  { timestamps: true }
);

const Reminder = mongoose.model("Reminder", reminderSchema);
exports.Reminder = Reminder;
