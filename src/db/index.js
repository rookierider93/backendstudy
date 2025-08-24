import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    console.log("dbanem", `${process.env.MONGODB_URI}`);

    try {
        debugger;
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`\n MONGODB connected!! DB HOST: ${connectionInstance.connection.host}`);

    }
    catch (error) {
        debugger;
        console.log("MONGODB ddconnection failed", error);
        process.exit(1)

    }
}

export default connectDB;