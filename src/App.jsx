
import Todo from "./components/Todo"

function App() {
  return (
  <div> 
    <div className="navbar">
    <h1>My ToDo</h1>
    <button className="btn">Add Task</button>
    </div>
    <div className="tasks">
      <Todo text='Learn React'/>
      <Todo text='Master React'/>
      <Todo text='Explore React'/>
    </div>
  </div>
  )
}

export default App
