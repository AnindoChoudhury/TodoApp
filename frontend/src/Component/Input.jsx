import React,{useState,useRef,useContext} from "react";
import TodoContext from "../context/TodoContext";
import "../App.css"
import Stat from "./Stat";
function Input()
{
  const titleRef = useRef(null);
  const {setTodoCon,todoCon,title,setTitle,totalNumberOfTodos,setTotalNumberOfTodos} = useContext(TodoContext);
 
  async function pushTodo()
  {
    const todoTitle = titleRef.current.value;
    const todoObject = {todoTitle};
    setTodoCon((current)=>([...current,todoObject]));
    const reqBody = {
      title : todoTitle,
    }
    titleRef.current.value="";
    await fetch("https://todo-app-backend-delta.vercel.app/todo",{
      method : "POST",
      body : JSON.stringify(reqBody),
      headers : {
         "Content-type" : "application/json"
      }
    })
  }
  
   return (
    <div
    className="display"
    style={{
      display: "flex",
      gap: "1rem",
      flexDirection: "column",
      width: "100%",
      paddingTop: "8%",
      alignItems: "center",
      height : "100vh",
      overflow: "auto",
    }}
  >
    <div style={{display : "flex",width : "90%"}}>
    <input style={{
       width : "80%",
       height : "2rem",
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