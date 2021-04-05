const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://AnkitDhopate:!NAyZaC-24F3Lx$@cluster0.cdik6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected !");
  })
  .catch((e) => {
    console.log("Error " + e);
  });
