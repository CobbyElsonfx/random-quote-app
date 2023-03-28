
import './App.css' 
import Quote from "./components/Quote"
import Sidebar from "./components/Sidebar"
import { ErrorBoundary } from "react-error-boundary";


function App() {

  
  return (
    <>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>    
      <div className="App">
        <Sidebar/>
        <Quote/>
      </div>
    </ErrorBoundary>
    </>
    
  )
}

export default App
