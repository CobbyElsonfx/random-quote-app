
import './App.css' 
import Quote from "./components/Quote"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import { ErrorBoundary } from "react-error-boundary";


function App() {

  
  return (
    <>
      <div className="App ">
         <ErrorBoundary fallback={<div>Something went wrong</div>}>    
          <Quote/>
        </ErrorBoundary>

      </div>
    </>
    
  )
}

export default App
