const express = require("express");
const cors = require("cors");
const blogRouter = require("./routs/blog-route");
const axios = require("axios");
require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogRouter);

app.use("/api", (req, res) => {
  res.send("ankit is good");
});

app.listen(5000, () => console.log(`app is running at 5000`));
