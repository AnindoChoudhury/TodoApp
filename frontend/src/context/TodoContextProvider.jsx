import React,{useState} from "react";
import TodoContext from "./TodoContext";

const TodoContextProvider = ({children})=>
    {
        const [todoCon,setTodoCon] = useState([]);
        const [totalNumberOfTodos,setTotalNumberOfTodos]=useState(0);
        const [completedTodo,setCompletedTodo]=useState([]);
        const [incompleteTodo, setIncompleteTodo]=useState(0);
        const [numberOfHighPriority,setNumberOfHighPriority]=useState(0);
        const [numberOfMediumPriority,setNumberOfMediumPriority]=useState(0);
        const [numberOfLowPriority,setNumberOfLowPriority]=useState(0);
        const [title,setTitle]=useState("No Todos here");
        const [check,setCheck] = useState(false); 

        return (
            <TodoContext.Provider value = {{todoCon,setTodoCon,totalNumberOfTodos,setCheck,setTotalNumberOfTodos,completedTodo,setCompletedTodo,incompleteTodo,title,setTitle,setIncompleteTodo,check,numberOfHighPriority,setNumberOfHighPriority,numberOfMediumPriority,setNumberOfMediumPriority,numberOfLowPriority,setNumberOfLowPriority}}>
                {children}
            </TodoContext.Provider>
        )
    }

    export default TodoContextProvider;