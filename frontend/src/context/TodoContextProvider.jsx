import React,{useState} from "react";
import TodoContext from "./TodoContext";

const TodoContextProvider = ({children})=>
    {
        const [todoCon,setTodoCon] = useState([]);
        const [totalNumberOfTodos,setTotalNumberOfTodos]=useState(0);
        const [completedTodo,setCompletedTodo]=useState(0);
        const [incompleteTodo, setIncompleteTodo]=useState(0);
        const [numberOfHighPriority,setNumberOfHighPriority]=useState(0);
        const [numberOfMediumPriority,setNumberOfMediumPriority]=useState(0);
        const [numberOfLowPriority,setNumberOfLowPriority]=useState(0);
        const [title,setTitle]=useState("No Todos here");

        return (
            <TodoContext.Provider value = {{todoCon,setTodoCon,totalNumberOfTodos,setTotalNumberOfTodos,completedTodo,setCompletedTodo,incompleteTodo,title,setTitle,setIncompleteTodo,numberOfHighPriority,setNumberOfHighPriority,numberOfMediumPriority,setNumberOfMediumPriority,numberOfLowPriority,setNumberOfLowPriority}}>
                {children}
            </TodoContext.Provider>
        )
    }

    export default TodoContextProvider;