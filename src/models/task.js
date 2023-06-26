const mongoose = require("mongoose");
const validator = require("validator");

const taskSchema = new mongoose.Schema(
  {
    description: { type: String, trim: true, required: true },
    completed: { type: Boolean, default: false },
    owner: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

const Tasks = mongoose.model("tasks", taskSchema);

module.exports = Tasks;

// const myTask = new Tasks({
//   description: "learning node.js hahaha",
//   completed: false,
// });

// myTask
//   .save()
//   .then(() => {
//     console.log(myTask);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });
