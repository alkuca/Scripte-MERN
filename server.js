const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");



const app = express();

app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

//connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log("mongoDB connected..."))
    .catch(error => console.log(error));

//Use Routes
app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server starded on port ${port}`));