const mongoose = require("mongoose");

const Connection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true,useUnifiedTopology: true  });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
};

module.exports = Connection;