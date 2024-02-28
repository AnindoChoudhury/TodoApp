import Input from "./Component/Input"
import Display from "./Component/Display"
import TodoContextProvider from "./context/TodoContextProvider"

function App() {
  return(
    <div style={{display:"flex"}}>
      <TodoContextProvider>
      <Input/>
      <Display/>
      </TodoContextProvider>
    </div>
  )
  
}

export default App
