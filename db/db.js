const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/bookstore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Connection to MongoDB failed:", err);
  });
