const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://root:DEZiNJm9sSH5ZTYs@cluster0.gk1esno.mongodb.net/libreria-db?retryWrites=true&w=majority"
  )
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.log("Error al conectar a MongoDB: ", err));

module.exports = mongoose;
