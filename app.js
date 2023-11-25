const express = require("express");
const app = express();


//config destination


const bodyParser = require("body-parser");
const morgan = require("morgan");
const { db } = require("./utils/database");

const userRowtes = require("./routes/user.routes");
const authRowtes = require("./routes/auth.routes");
const uploadRoutes = require("./routes/upload.routes");
const cookieParser = require("cookie-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));

//use routes
app.use("/api/v1/auth", authRowtes);
app.use("/api/v1/users", userRowtes);
app.use("/api/v1/upload", uploadRoutes);


//routes for rendering to client
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/homepage.html`);
});

app.get("/upload", (req, res) => {
  res.sendFile(`${__dirname}/public/demo-upload.html`);
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
