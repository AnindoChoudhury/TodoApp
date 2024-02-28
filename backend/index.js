require("dotenv").config();
const express = require("express");
const {createTodo,updateTodo} = require("./zodSchemas")
const {Todos}=require("./Database/mongo");
const app = express();
const cors = require ("cors");
app.use(express.json());
app.use(cors(
    {
        origin : "*",
        methods : ["POST","GET","PUT"],
        credentials : true
    }
));

// signup logic 
app.post("/signup",(req,res)=>
{
    
})
//login logic 
app.post("/login",(req,res)=>
{
    
}) 
// create todo logic 
app.post("/todo",async (req,res)=>
{
    if(createTodo.safeParse(req.body).success)
    {
        const title = req.body.title;
        const description = req.body.description;
       await Todos.create({title,description});
       res.status(200).json({msg : "Todo Added"});
    }
    else 
    {
        res.status(411).json({
            title : req.body.title,
            des : req.body.description
        })
    }
})
// display todo logic 
app.get("/todo",async(req,res)=>
{
    const todos = await Todos.find({});
    if(!todos.length)
    {
      res.status(200).json({msg : "0 todo"});
      return; 
    }
    return res.status(200).json(todos);
})
// update todo logic
app.put("/todo",async (req,res)=>
{
    if(updateTodo.safeParse(req.body).success)
   {
        const id = req.body.id; 
        const title = req.body.title; 
        const description = req.body.description ; 
        try{
        const todo = await Todos.findById(id);
        await Todos.updateOne({_id : id},{completed : true});
        res.status(200).json({msg : "Updated todo"});
        }
        catch(err)
        {
            res.send("Invalid ID");
        }
   }
   else 
   {
     res.status(411).json({msg : "Wrong inputs"});
   }
})
// delete todo logic
app.delete("/todo",(req,res)=>
{
    
})


app.listen(process.env.PORT,()=>
{
console.log("Server running");
})