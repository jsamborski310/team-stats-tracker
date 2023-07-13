const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://juanita:1KkNaa3Gn5cWFJkp@cluster0.jprrwjf.mongodb.net/teamDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const db = mongoose.connection;
module.exports = db;

