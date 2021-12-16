const express = require("express");
const userRoutes = require("./routes/userRoutes.js");
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/", userRoutes);

app.listen(3000, () => {
  console.log("server is running at port 3000..");
});
