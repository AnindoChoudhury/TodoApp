import { useContext } from "react"
import "../index.css"
import TodoContext from "../context/TodoContext";
import { motion } from "framer-motion"

function StatItems({text,color,number})
{
   
    
    return(
    <div className="statItems" style={{backgroundColor:color,display:"flex",paddingBottom:"1rem",justifyContent:"center",flexDirection:"column"}}>
            <p>{text}</p>
            <motion.p 
            className="stat" 
            style={{fontWeight:"100",fontSize:"2rem"}}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >{number}</motion.p>
    </div>
    )
}

export default function Stat()
{
    const {totalNumberOfTodos,completedTodo,setCompletedTodo}=useContext(TodoContext);
    return(
        <div style={{display : "flex",marginTop : "20px",height : "19rem",padding:"0 1rem 0 1rem",flexDirection:"column",width : "90%",justifyContent : "start",alignItems : "center"}}>
            <div style={{width : "100%"}}>
            <h2 className="mt-10 scroll-m-20 mb-[1rem] pb-2 text-3xl font-semibold tracking-normal transition-colors first:mt-0">Stats</h2>
            <div style={{display :"grid", gridTemplateColumns : "1fr 1fr 1fr", gap:"1rem",margin:"0"}}>
             <StatItems text="Total" color ="#C5EBAA" number = {totalNumberOfTodos} />
             <StatItems text="Remaining" color ="#FC6736" number={totalNumberOfTodos-completedTodo.length}/>
             <StatItems text="Complete" color ="#F8E559"
             number={completedTodo.length}/>
            <StatItems  text="High Priority" color="#FF8080"/>
            <StatItems text="Medium Priority" color="#FDBF60"/>
            <StatItems text="Low Priority" color ="#F2C18D"/>

            </div>
            </div>
            
        </div>
    )
}