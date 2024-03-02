import React, { useState, useEffect, useContext,useRef} from "react";
import TodoContext from "../context/TodoContext";
import { Checkbox } from "@/components/ui/checkbox"
function Display() {
  let [color, setColor] = useState([]);
  // const [check, setCheck] = useState([false]);
  const { todoCon,setTodoCon,check,title,setTitle,setCheck,setTotalNumberOfTodos} = useContext(TodoContext);

  useEffect(()=>
  {
    if(todoCon.length)
    {
      setTitle("");
      setTotalNumberOfTodos(todoCon.length);
    }
  },[todoCon]);
  // If there is at least a single todo in the todoCon array
 
  const checkRef = useRef(null);
  return (
      <div
        className="display"
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor:"white",
          width: "100%",
          alignItems: "center",
          height : "100vh",
          overflow: "auto",
          paddingBottom: "50px",
        }}
      >
    <h2 className="mt-10 scroll-m-20 pb-2 text-3xl self-start font-semibold tracking-tight transition-colors first:mt-0" style={{marginTop:"8%",marginLeft:"2rem"}}>{title}</h2>
    <div className="displaychild" style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",width:"100%",marginTop : "4.3rem"}}>
        {todoCon.map((item, i) => {
          let todoItemBackgroundColor = i%2===0?"#ECB159":"#F0F3FF";

          let borderRadiusOfItem = i===0? "10px 10px 0 0" : (i===todoCon.length-1)? "0 0 10px 10px" : "0 0 0 0";
         
          return(
          <div
            key={i}
            style={{
              width: "90%",
              backgroundColor:todoItemBackgroundColor,
              borderRadius : borderRadiusOfItem,
              padding : "20px",
              // backgroundColor: color[i] || "red",
              // padding: "1rem",
              // borderRadius: "10px",
            }}
          >
            <div className="flex gap-6 items-center">
            
            <Checkbox ref = {checkRef} id={i}/>
            <p className="leading-7">{item.todoTitle}</p>
            
            </div>

           
          </div>
        )})}
        </div>
      </div>
    );
};

export default Display;
