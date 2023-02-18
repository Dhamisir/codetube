// client 
const { client } = require("../config/db");

/* ===> database and collection <=== */
const database = client.db("cointube");
const collection = database.collection("fetch");

/* ===> fetchPostController <=== */
async function fetchPostController(data) {
    try {
        const result = await collection.insertMany(data);
        return {
            payload: {
                status: 201,
                msg: "Done"
            }
        }
    } catch (error) {
        // console.log(error);
        return {
            payload: {
                status: 401,
                msg: error.message
            }
        }
    }
}

/* ===> fetchDeleteController <=== */
async function fetchDeleteController() {
    try {
        const result = await collection.deleteMany({});
        return {
            payload: {
                status: 201,
                msg: "Done"
            }
        }
    } catch (error) {
        // console.log(error);
        return {
            payload: {
                status: 401,
                msg: error.message
            }
        }
    }
}

/* ===> fetchGetController <=== */
async function fetchGetController(filter, limit, page) {
    try {
        const cursor = await collection.find(filter).limit(limit).skip((page - 1) * limit);
        const documents = await cursor.toArray();
        // console.log(documents)
        return {
            payload: {
                status: 201,
                msg: documents
            }
        }
    } catch (error) {
        // console.log(error);
        return {
            payload: {
                status: 401,
                msg: error.message
            }
        }
    }
}
module.exports = { fetchPostController, fetchDeleteController, fetchGetController };