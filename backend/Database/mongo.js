const dotenv = require("dotenv"); 
dotenv.config();
const mongoose = require("mongoose");
// const dbName = "Todo-App";
// const {mongoConnect} = require("../passwords"); 
mongoose.connect(`${process.env.MongoURL}`).then(()=>
{
    console.log("MongoDB connected successfully")
}).catch((e)=>
{
    console.log("error");
});

const todoSchema = new mongoose.Schema (
    {
        title : String,
        description : String, 
        completed : Boolean,
    }
)

const Todos = mongoose.model("Todos",todoSchema);



module.exports = {Todos};