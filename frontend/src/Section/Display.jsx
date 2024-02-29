import React, { useState, useEffect, useContext } from "react";
import TodoContext from "../context/TodoContext";

function Display() {
  let [color, setColor] = useState([]);
  const [check, setCheck] = useState([false]);
  const { todoCon,setTodoCon,title,setTitle,setTotalNumberOfTodos} = useContext(TodoContext);

  // Changes the color array based on the values of the check array
  useEffect(() => {
    setColor(
      check.map((item) => {
        if (item) return "#D4E7C5";
        else return "white";
      })
    );
    console.log(check);
  }, [check]);
   useEffect(()=>
   {
    if(todoCon.length)
     {
      setTitle("Your list");
      setTotalNumberOfTodos(todoCon.length);
     }
   },[todoCon]);
  // If there is at least a single todo in the todoCon array
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
    <div className="displaychild" style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",width:"100%",marginTop : "2rem"}}>
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
              padding : "15px",
              // backgroundColor: color[i] || "red",
              // padding: "1rem",
              // borderRadius: "10px",
            }}
          >
            <p className="leading-7 [&:not(:first-child)]:mt-6">{item.todoTitle}</p>
            {/* <p style={{ display: "inline", marginRight: "1.5rem" }}>
              Completed 
            </p>
            <input
              style={{
                width: "20px",
                height: "20px",
                position: "absolute",
                bottom: "15px",
              }}
              type="checkbox"
              onChange={() => {
                setCheck((prev) => {
                  const newCheck = [...prev];
                  newCheck[i] = !newCheck[i];
                  return newCheck;
                });
              }}
            /> */}
          </div>
        )})}
        </div>
      </div>
    );
};

export default Display;
