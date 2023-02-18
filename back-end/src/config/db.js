const mongoose = require("mongoose");
// mongo url
const DB_URL = process.env.DB_URL;

/* ===> connect with the help of mongoose <=== */
const connect = () => {
    return mongoose.connect(DB_URL);
}

/* ===> connect with the help of MongoClient (mongoose) <=== */
const { MongoClient } = require("mongodb");
const client = new MongoClient(DB_URL);

module.exports = { connect, client };
