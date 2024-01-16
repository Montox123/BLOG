const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://ankitraj64930:ms6ykk7mcHsdezLy@cluster0.xuyw150.mongodb.net/"
  )
  .then(() => console.log("connect mongo db"))
  .catch((e) => console.log(e));
