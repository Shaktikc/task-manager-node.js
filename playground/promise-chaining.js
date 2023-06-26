require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("6465bb656850d236f4150d4a", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("6467575acdff1e406cd14104", 26)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
