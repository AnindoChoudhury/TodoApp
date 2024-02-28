import React, { useState, useEffect, useContext } from "react";
import TodoContext from "../context/TodoContext";
function Display() {
  let ind;
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
      setTitle("Your TODOS");
      setTotalNumberOfTodos(todoCon.length);
     }
   },[todoCon]);
  // If there is at least a single todo in the todoCon array
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
          paddingBottom: "50px",
        }}
      >
    <h2>{title}</h2>
        {todoCon.map((item, i) => (
          <div
            key={i}
            style={{
              width: "90%",
              backgroundColor: color[i] || "white",
              padding: "1rem",
              borderRadius: "10px",
              position: "relative",
            }}
          >
            <h2 style={{ marginBottom: "1rem" }}>{item.todoTitle}</h2>
            <p style={{ display: "inline", marginRight: "1.5rem" }}>
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
            />
          </div>
        ))}
      </div>
    );
}

export default Display;
