"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import {useState,useContext,useEffect} from "react"
import { cn } from "@/lib/utils"
import TodoContext from "@/context/TodoContext"

const Checkbox = React.forwardRef(({ className, ...props }, ref) => {
  const {completedBtnClicked,setRemainingBtnClicked,setCompletedBtnClicked,todoCon,setTodoCon,completedTodo,setCompletedTodo,arraySelector,setArraySelector,remainingBtnClicked,incompleteTodo,setIncompleteTodo}= useContext(TodoContext)
  useEffect(function()
  {
    // Filters the completed tasks and puts them in completedTodo
    setCompletedTodo([...todoCon.filter((item)=>(item.completed))])
    
  },[todoCon])
  useEffect(function()
  {
    if(completedBtnClicked)
    setArraySelector([...completedTodo])
  },[todoCon])
 useEffect(function()
 {
  setIncompleteTodo([...todoCon.filter((item)=>(!item.completed))])
 },[todoCon])
 useEffect(function()
 {
    if(remainingBtnClicked)
    setArraySelector([...incompleteTodo]);

 },[todoCon])
  return(
  <CheckboxPrimitive.Root
  // Toggles the property completed of the original todo list
    onCheckedChange={function()
    {
        setTodoCon([...todoCon.map((item)=>
        {
          item.completed=item.id===props.id?!item.completed : item.completed;
          return item; 
        })])
    }}
    checked={props.completed}
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}>
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
)})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
