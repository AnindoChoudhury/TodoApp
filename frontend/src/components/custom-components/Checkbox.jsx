import {useState,forwardRef,useEffect} from "react"



const Checkbox = forwardRef(({id},ref)=>
{
   const checkHandler=()=>
   {
      console.log(ref);
   }
    return(
        <input onChange={checkHandler} ref={ref} type="checkbox"  id={id}/>
    )
})

export {Checkbox}