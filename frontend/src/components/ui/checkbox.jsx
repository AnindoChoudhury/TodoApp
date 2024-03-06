"use client";

import * as React from "react";
import { useEffect } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { useContext } from "react";
import TodoContext from "@/context/TodoContext";
import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef(({ className, props }, ref) => {
  const {
    todoCon,
    setTodoCon,
    completedTodo,
    setCompletedTodo,
    checkedStatus,
    setCheckedStatus,
  } = useContext(TodoContext);

  useEffect(() => {
    console.log(completedTodo);
  }, [completedTodo]);

  useEffect(() => {
    setCompletedTodo([...todoCon.filter((todo) => todo.completed)]);
  }, [todoCon]);

  return (
    <CheckboxPrimitive.Root
      onCheckedChange={function () {
        setTodoCon((prev) => {
          return prev.map((todo) => {
            return todo.id === props.id
              ? { ...todo, completed: !todo.completed }
              : todo;
          });
        });
      }}
      ref={ref}
      checked={props.completed}
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=true]:bg-primary data-[state=true]:text-primary-foreground",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
