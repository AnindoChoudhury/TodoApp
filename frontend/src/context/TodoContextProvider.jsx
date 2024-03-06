import React,{useState} from "react";
import TodoContext from "./TodoContext";

const TodoContextProvider = ({children})=>
    {
        const [todoCon,setTodoCon] = useState([]);
        const [totalNumberOfTodos,setTotalNumberOfTodos]=useState(0);
        const [completedTodo,setCompletedTodo]=useState([]);
        const [incompleteTodo, setIncompleteTodo]=useState([]);
        const [numberOfHighPriority,setNumberOfHighPriority]=useState(0);
        const [checkedStatus,setCheckedStatus]=useState(false);
        const [numberOfMediumPriority,setNumberOfMediumPriority]=useState(0);
        const [numberOfLowPriority,setNumberOfLowPriority]=useState(0);
        const [title,setTitle]=useState("hidden");
        const [arraySelector, setArraySelector]=useState(todoCon);
        const [check,setCheck] = useState(false); 
        const [showSortDialogBox,setShowSortDialogBox]=useState("hidden");
        return (
            <TodoContext.Provider value = {{todoCon,setTodoCon,arraySelector,checkedStatus,setShowSortDialogBox,setCheckedStatus,totalNumberOfTodos,setCheck,setTotalNumberOfTodos,completedTodo,setCompletedTodo,showSortDialogBox,incompleteTodo,title,setTitle,setIncompleteTodo,check,setArraySelector,numberOfHighPriority,setNumberOfHighPriority,numberOfMediumPriority,setNumberOfMediumPriority,numberOfLowPriority,setNumberOfLowPriority}}>
                {children}
            </TodoContext.Provider>
        )
    }

    export default TodoContextProvider;