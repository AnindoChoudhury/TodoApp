import Input from "./Section/Input"
import Display from "./Section/Display"
import TodoContextProvider from "./context/TodoContextProvider"

function App() {
  return(
    <div style={{display:"flex"}}>
      <TodoContextProvider>
      <Input/>
      <Display/>
      </TodoContextProvider>
    </div>
  );
  
}

export default App
