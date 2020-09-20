const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/teste-helpper",
  { useUnifiedTopology: true, 
    useNewUrlParser: true },
  () => {
    console.log('I"m connected to mongodb');
  }
);
