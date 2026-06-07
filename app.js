const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const studentRoutes = require("./routes/studentRoutes");

app.use("/", studentRoutes);

app.listen(3000, () => {
    console.log("Server berjalan di port 3000");
});