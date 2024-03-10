//require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import connectDB from "./db/DB.js";

//either goto package.json and in scripts
//"dev": "nodemon src/index.js" ---> "nodemon -r dotenv/config --experimental-json-modules src/index.js"

dotenv.config({
    path: './.env'
})

connectDB();