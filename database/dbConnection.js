const mongoose = require("mongoose");
const dbConnection = mongoose
  .connect(`${process.env.DB_URL}`)
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    console.log(`DB Connected Succefully on Port ${process.env.PORT}`);
  });

module.exports = dbConnection;
