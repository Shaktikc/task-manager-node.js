require("../src/db/mongoose");
const Tasks = require("../src/models/task");

// Tasks.findByIdAndDelete("6465be618abc3b161c70c9ea")
//   .then(() => {
//     return Tasks.countDocuments({ completed: false });
//   })
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  await Tasks.findByIdAndDelete(id);
  const count = await Tasks.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("6465a05f68fbc011c09ecc3c")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
