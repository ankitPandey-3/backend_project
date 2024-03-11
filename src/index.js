//require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import connectDB from "./db/DB.js";
import { app } from "./app.js";

//either goto package.json and in scripts
//"dev": "nodemon src/index.js" ---> "nodemon -r dotenv/config --experimental-json-modules src/index.js"

dotenv.config({
    path: './.env'
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, ()=> {
            console.log("Server is running");
        })
    })
    .catch((err) => {
        console.log("MongoDB connection failed !!!!", err);
    });