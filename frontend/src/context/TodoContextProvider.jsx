import React,{useState} from "react";
import TodoContext from "./TodoContext";

const TodoContextProvider = ({children})=>
    {
        const [todoCon,setTodoCon] = useState([]);
        const [totalNumberOfTodos,setTotalNumberOfTodos]=useState(0);
        const [completedTodo,setCompletedTodo]=useState([]);
        const [incompleteTodo, setIncompleteTodo]=useState([]);
        const [highPriority,setHighPriority]=useState([]);
        const [checkedStatus,setCheckedStatus]=useState(false);
        const [mediumPriority,setMediumPriority]=useState([]);
        const [lowPriority,setLowPriority]=useState([]);
        const [title,setTitle]=useState("hidden");
        const [priority,setPriority]=useState(null)
        const [priorityColor,setPriorityColor]=useState("");
        const [arraySelector, setArraySelector]=useState(todoCon);
        const [completedBtnClicked,setCompletedBtnClicked]=useState(false);
        const [remainingBtnClicked,setRemainingBtnClicked]=useState(false);
        const [check,setCheck] = useState(false); 
        const [showSortDialogBox,setShowSortDialogBox]=useState("hidden");
        return (
            <TodoContext.Provider value = {{todoCon,setTodoCon,arraySelector,checkedStatus,setShowSortDialogBox,setCheckedStatus,totalNumberOfTodos,setCheck,setPriorityColor,setTotalNumberOfTodos,completedTodo,priority,setCompletedTodo,showSortDialogBox,completedBtnClicked,setCompletedBtnClicked,incompleteTodo,title,priorityColor,setTitle,setIncompleteTodo,setPriority,check,setArraySelector,highPriority,setHighPriority,lowPriority,mediumPriority,remainingBtnClicked,setRemainingBtnClicked,setLowPriority,setMediumPriority}}>
                {children}
            </TodoContext.Provider>
        )
    }

    export default TodoContextProvider;