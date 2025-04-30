import { useState } from 'react';
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }])
      setInput('')
    }
  }

  const toggleTask = (index) => {
    const updated = tasks.map((task, i) => 
      i === index ? {...task, completed: ! task.completed} : task
    )
    setTasks(updated)
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  return (
    <div className='App'>
      <h1>To-Do List</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='New Task'/>
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, i) => (
          <li key={i} style={{textDecoration: task.completed ? 'line-through' : ''}}>
            {task.text}
            <button onClick={() => toggleTask(i)}>✔️</button>
            <button onClick={() => deleteTask(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App