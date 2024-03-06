"use client"

import * as React from "react"
import { useEffect } from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import { useContext } from "react"
import TodoContext from "@/context/TodoContext"
import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef(({ className, ...props }, ref) => {
  const {todoCon,completedTodo,setCompletedTodo,checkedStatus,setCheckedStatus} = useContext(TodoContext);

  useEffect(()=>
  {
    console.log(completedTodo);
  },[completedTodo])
  
  return(
  <CheckboxPrimitive.Root
    onCheckedChange={function()
    {
        todoCon[ref.current.id].completed=ref.current.ariaChecked;
        setCompletedTodo([...todoCon.filter((item)=>(item.completed==="true"))])
    }}
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=true]:bg-primary data-[state=true]:text-primary-foreground",
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
