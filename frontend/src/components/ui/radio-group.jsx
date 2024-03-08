"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"
import { useContext } from "react"
import TodoContext from "@/context/TodoContext"
import { cn } from "@/lib/utils"
// import { FUNCTIONS_CONFIG_MANIFEST } from "next/dist/shared/lib/constants"

const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return (<RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />);
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
 
  const {todoCon,mediumPriority,setTodoCon,arraySelector,setArraySelector,setMediumPriority,setLowPriority,setHighPriority} = useContext(TodoContext)
  // With change in priority, the arraySelector also changes, and therefore the arraySelector is checked and 
  // kept inside the respective arrays
  React.useEffect(function()
  {
    setMediumPriority([...arraySelector.filter((item)=>(item.priority==="medium"))]);
    setLowPriority([...arraySelector.filter((item)=>(item.priority==="low"))]);
    setHighPriority([...arraySelector.filter((item)=>(item.priority==="high"))]);
  },[arraySelector])
  React.useEffect(function()
  {
    console.log(mediumPriority);
  },[mediumPriority])
  return (
    (<RadioGroupPrimitive.Item
    // On clicking a radio button, a new array is created with the priority set to the priority of the clicked
    // radio button. Then the new array is set to arraySelector
      onClick={function(e)
      {
          console.log(e); 
          setArraySelector(...[arraySelector.map((item)=>{
            if(props.id===item.id)
            {
              item.priority=props.priority; 
            }
            return item;
          })])
      }}
      ref={ref}
      // The radio gets selected whose priority matches with the todo priority
      checked = {props.itemPriority===props.priority}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}>
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>)
  );
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
