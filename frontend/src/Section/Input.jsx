import React,{useState,useRef,useContext} from "react";
import TodoContext from "../context/TodoContext";
import "../App.css"
import Stat from "./Stat";
import { Button } from "@/components/ui/button"
function Input()
{
  const titleRef = useRef(null);
  const {setTodoCon,todoCon,setArraySelector,title,setTitle,totalNumberOfTodos,setTotalNumberOfTodos} = useContext(TodoContext);
  
  async function pushTodo()
  {
    const todoTitle = titleRef.current.value;
    if(!todoTitle)
    {
       alert("At least enter some todo");
       return; 
    }
    const todoObject = {id:todoCon.length,todoTitle:todoTitle,completed:false,priority : "high"};
    setTodoCon((current)=>([...current,todoObject]));
    const reqBody = {
      id : todoCon.length,
      title : todoTitle,
      completed : false,
      priority : "high"
    }
    console.log(todoObject);
    titleRef.current.value="";
    await fetch("https://todo-app-nu-neon-64.vercel.app/",{
      method : "POST",
      body : JSON.stringify(reqBody),
      headers : {
         "Content-type" : "application/json"
      }
    })
  }
  
   return (
    <div
    className="input"
    style={{
      display: "flex",
      gap: "1rem",
      flexDirection: "column",
      width: "100%",
      paddingTop: "7%",
      alignItems: "center",
      height : "100vh",
      overflow: "auto",
    }}
  >
    
    <div style={{display : "flex",width : "90%",marginTop : "2.4rem"}}>
    <input style={{
       width : "80%",
       height : "100%",
       borderRadius : "10px 0 0 10px",
       fontFamily : "Roboto",
       backgroundColor : "white",
       border : "2px solid rgb(53, 55, 75,0.2)",fontWeight:"500",
       borderRight :"none",
       padding : "10px",
       letterSpacing : "0.5px",
       outline : "none",
    }} ref = {titleRef} type="text" placeholder="title" onKeyDown={function(e)
    {
      if(e.key==="Enter")
      pushTodo();
    }}/>
    
    <button className="submitBtn" style={{padding : "10px",textAlign:"center",borderRadius : "0 10px 10px 0",width:"20%",border : "none",height:"3.5rem",margin:"0",backgroundColor:"#EE4266",fontFamily:"Roboto",fontWeight :"500"}} 
  onClick={pushTodo}>
  Submit</button>
  </div>
  <Stat/>


 
  </div>


   )
}

export default Input; 