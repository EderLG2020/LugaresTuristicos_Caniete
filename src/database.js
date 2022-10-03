const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Base de datos conectado");
  })
  .catch((e) => {
    console.log("error en la conxion=>" + e);
  });
