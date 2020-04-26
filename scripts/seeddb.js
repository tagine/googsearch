const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/ccmessagelist"
);

const messageSeed = [
{
    googleid: 1,
    title: "The Bluest Eye",
    author: "Toni Morrison",
    description: "a great book!"
  },
];

db.Message
  .remove({})
  .then(() => db.Message.collection.insertMany(messageSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
