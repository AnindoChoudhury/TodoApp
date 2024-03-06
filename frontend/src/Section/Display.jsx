import React, { useState, useEffect, useContext, useRef } from "react";
import TodoContext from "../context/TodoContext";
import { Button } from "@/components/ui/button";
import TopSection from "./TopSection";
import { Checkbox } from "@/components/ui/checkbox";
// import {Checkbox} from "@/components/custom-components/Checkbox";
function NoTodoHeading() {
  const { title, setTitle } = useContext(TodoContext);
  return (
    <h2
      className="noTodoHeading mt-10 scroll-m-20 pb-2 text-3xl self-start font-semibold tracking-tight transition-colors first:mt-0"
      style={{ marginTop: "2.8rem", marginLeft: "2rem", display: title }}
    >
      No Todos Here
    </h2>
  );
}

function Display() {
  let [color, setColor] = useState([]);
  // const [check, setCheck] = useState([false]);
  const { todoCon,setTodoCon,check,title,setTitle,setCheck,setTotalNumberOfTodos,arraySelector,setArraySelector,totalNumberOfTodos} = useContext(TodoContext);

  useEffect(() => {
    if (todoCon.length) {
      setTitle("block");
    } else setTitle("hidden");
    setTotalNumberOfTodos(todoCon.length);
    setArraySelector([...todoCon]);
  }, [todoCon]);

  // If there is at least a single todo in the todoCon array

  const checkRef = useRef(null);
  return (
    <div
      className="display"
      style={{
        // display: "flex",
        // flexDirection: "column",
        backgroundColor: "white",
        width: "100%",
        // alignItems: "center",
        height: "100vh",
        overflow: "auto",
        paddingBottom: "50px",
      }}
    >
      <TopSection />
      <div
        className="displaychild"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          marginTop: "2.8rem",
        }}
      >
        {arraySelector.map((item, i) => {
          let todoItemBackgroundColor = i % 2 === 0 ? "#ECB159" : "#F0F3FF";

          let borderRadiusOfItem = i===0? "10px 10px 0 0" : (i===todoCon.length-1)? "0 0 10px 10px" : "0 0 0 0";
         
          return(
          <div
            key={i}
            style={{
              width: "90%",
              backgroundColor:todoItemBackgroundColor,
              borderRadius : borderRadiusOfItem,
              padding : "20px",

            }}
          >
            <div className="flex gap-6 items-center"> 
            <Checkbox id={item.id} completed={item.completed}/>
            <p className="leading-7">{item.todoTitle}</p>  
            </div>
          </div>
        )})}
        </div>
      </div>
    );
};

export default Display;
