
import './App.css' 
import Quote from "./components/Quote"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <React.Fragment className="App">
      <Sidebar/>
      <Quote/>
    </React.Fragment>
  )
}

export default App
