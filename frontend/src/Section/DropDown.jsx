
import { useContext } from "react"
import TodoContext from "@/context/TodoContext"
export default function DropDown({className})
{
    const {showSortDialogBox,setCompletedBtnClicked,setShowSortDialogBox,setRemainingBtnClicked,arraySelector,setArraySelector}=useContext(TodoContext)
    function priorityHandler()
    {
      console.log(arraySelector)
    }
    function dateHandler()
    {
      //  setCompletedBtnClicked(false)
      //  setRemainingBtnClicked(false);
       setArraySelector([...arraySelector.reverse()])
    }
    return(
        <>


        <div className={`absolute top-10 right-[8rem] rounded shadow bg-white overflow-hidden  flex flex-col w-40 ${showSortDialogBox} mt-1 border border-gray-200`}>
        <div className="cursor-pointer group" onClick={priorityHandler}>
          <a className="block p-2  border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">Priority</a>
        </div>
        <div className="cursor-pointer group border-t" onClick={dateHandler}>
          <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 border-blue-600 group-hover:bg-gray-100">Date</a>
        </div>
       
      </div>
      </>
    )
}