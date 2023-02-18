// dotenv
require("dotenv").config();

// express 
const express = require("express");
const app = express();
app.use(express.json());

//cors
const cors = require("cors")
app.use(cors());

// connect
const { connect } = require("./config/db");

// PORT
const PORT = process.env.PORT;

// fetch route
const fetchRouter = require("./routes/fetch.routes");
app.use("/fetch", fetchRouter);

// check server start
app.get("/", (req, res) => {
    res.send("Server Start")
});

/* ===> Server Listen <=== */
app.listen(PORT, async () => {
    await connect()
    console.log(`http://localhost:${PORT}`)
})