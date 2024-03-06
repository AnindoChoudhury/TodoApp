import {useRef} from "react"; 
import TodoContext from "@/context/TodoContext";
import { Button } from "@/components/ui/button"
import DropDown from "./DropDown";
import {useContext} from "react"; 
export default function TopSection()
{
    const {todoCon,title,setTitle,arraySelector,completedTodo,setCompletedTodo,incompleteTodo,setIncompleteTodo,setArraySelector,setTodoCon}=useContext(TodoContext);
    const sortRef = useRef(null);
    const completedRef = useRef(null);
    const remainingRef = useRef(null);
    const allRef = useRef(null);
    const clearCompletedRef = useRef(null);
    const clearAllRef = useRef(null);
    return(
        <>
        <div className={`flex flex-wrap w-100 flex-row items-center justify-center mt-[2.6rem] gap-1`}>
       <Button className={`bg-white-500 ${title} text-black hover:bg-slate-300 text-s`} variant="secondary" clickHandler={function()
       {
            if(completedTodo.length)
            {
            setArraySelector([...completedTodo])

            
            }
            else 
            alert("You have no completed todos");
       }} ref={completedRef} >Show Completed</Button>
       <Button className={`bg-white-500 ${title} text-black hover:bg-slate-300 text-s`} variant="secondary" clickHandler={
        function()
        {
            if(incompleteTodo.length)
            setArraySelector([...incompleteTodo]);
            else  
            alert("You don't have incomplete Todos")
        }
       } ref={remainingRef}>Show Remaining</Button>
       <Button className={`bg-white-500 ${title} text-black hover:bg-slate-300 text-s`}  variant="secondary" clickHandler={function()
       {
            setArraySelector([...todoCon])
           
       }} ref={allRef} >Show All</Button>
       <Button className={`bg-white-500 ${title} text-black hover:bg-slate-300 text-s`} variant="secondary" clickHandler={
        function()
        {
                if(completedTodo.length)
                {
                setTodoCon([...todoCon.filter((item)=>(!item.completed))])
                setArraySelector(todoCon);
                }
                else 
                alert("You don't have any completed Todos")
        }
       } ref={clearCompletedRef}>Clear Completed</Button>
   <Button className={`bg-white-500 ${title} text-black hover:bg-slate-300 text-s`}  variant="secondary" clickHandler={
    function(e)
    {
        setTodoCon([]);
        setArraySelector(todoCon);
    }
   } ref={clearAllRef}>Clear All</Button>
   
   </div>
  </>
    )
}