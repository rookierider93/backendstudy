// require('dotenv').config({ path: './env' })
import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/index.js";
debugger;
const app = express();
dotenv.config({ path: './env' })

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is runing ar port:${process.env.PORT || 8000}`);

        })
    })
    .catch((err) => {
        console.log("MONGO DB  connection failed!!", err);
    })
    ;

/*  

import express from "express";

const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (err) => {
            console.error("Server error:", err);
        });
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("An error occurred:", error);
        throw error;
    }
})()

*/