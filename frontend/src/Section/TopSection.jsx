import {useRef} from "react"; 
import TodoContext from "@/context/TodoContext";
import { Button } from "@/components/ui/button"
import DropDown from "./DropDown";
import {useContext} from "react";
import { useEffect } from "react"; 
export default function TopSection()
{
    const {todoCon,title,remainingBtnClicked,setRemainingBtnClicked,setTitle,arraySelector,completedTodo,setCompletedTodo,incompleteTodo,setIncompleteTodo,setArraySelector,showSortDialogBox,setShowSortDialogBox,setTodoCon,completedBtnClicked,setCompletedBtnClicked}=useContext(TodoContext);
    const sortRef = useRef(null);
    const completedRef = useRef(null);
    const remainingRef = useRef(null);
    const allRef = useRef(null);
    const clearCompletedRef = useRef(null);
    const clearAllRef = useRef(null);
    useEffect(function()
    {
        if(completedBtnClicked)
        setArraySelector([...completedTodo])
        else 
        setArraySelector([...todoCon])
    },[completedBtnClicked])
    useEffect(function()
    {
        if(remainingBtnClicked)
        setArraySelector([...incompleteTodo])
        else
        setArraySelector([...todoCon])
    },[remainingBtnClicked])
    return(
        <>
        <div className={`flex flex-wrap w-100 flex-row items-center justify-center mt-[2.6rem] gap-1`}>
       <Button className={`bg-white-500 ${title} text-black hover:bg-slate-300 text-s`} variant="secondary" clickHandler={function(e)
       {
            if(completedTodo.length)
            {
            setRemainingBtnClicked(false)
            setCompletedBtnClicked((prev)=>(!prev));
            }
            else 
            alert("You have no completed todos");
       }} ref={completedRef} >Show Completed</Button>
       <Button className={`bg-white-500 ${title} text-black hover:bg-slate-300 text-s`} variant="secondary" clickHandler={
        function(e)
        {

            if(incompleteTodo.length)
            {
            setCompletedBtnClicked(false);
            setRemainingBtnClicked((prev)=>(!prev));
            }
            else  
            alert("You don't have incomplete Todos")
        }
       } ref={remainingRef}>Show Remaining</Button>
       <Button className={`bg-white-500 ${title} text-black hover:bg-slate-300 text-s`}  variant="secondary" clickHandler={function()
       {
            setArraySelector([...todoCon])
            setCompletedBtnClicked(false)
            setRemainingBtnClicked(false);
           
       }} ref={allRef} >Show All</Button>
       <Button className={`bg-white-500 ${title} text-black hover:bg-slate-300 text-s`} variant="secondary" clickHandler={
        function()
        {
                if(completedTodo.length)
                {
                setCompletedBtnClicked(false)
                setRemainingBtnClicked(false);
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
        setCompletedBtnClicked(false)
        setRemainingBtnClicked(false);
        setTodoCon([]);
        setArraySelector(todoCon);
    }
   } ref={clearAllRef}>Clear All</Button>
   <Button clickHandler={
    function()
    {
        setShowSortDialogBox((prev)=>(prev==="hidden"?"block":"hidden"))
    }
   } className={`bg-white-500 ${title} justify-self-end text-black hover:bg-slate-300 text-s`}  variant="secondary">Sort</Button>
   <DropDown/>
   </div>
  </>
    )
}