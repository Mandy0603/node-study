const mongoose = require("mongoose");

const Task = mongoose.model("tasks", {
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

// const taskSchema = new mongoose.Schema(
//   {
//     description: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     completed: {
//       type: Boolean,
//       default: false
//     },
//     owner: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       ref: "User"
//     }
//   },
//   {
//     timestamps: true
//   }
// );

// const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
