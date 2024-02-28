const dotenv = require("dotenv"); 
dotenv.config();
const mongoose = require("mongoose");
// const dbName = "Todo-App";
// const {mongoConnect} = require("../passwords"); 
mongoose.connect(`${process.env.MongoURL}`);

const todoSchema = new mongoose.Schema (
    {
        title : String,
        description : String, 
        completed : Boolean,
    }
)

const Todos = mongoose.model("Todos",todoSchema);



module.exports = {Todos};