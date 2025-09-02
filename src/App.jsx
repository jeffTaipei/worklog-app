import React, { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")

  const addTask = () => {
    if (!newTask.trim()) return
    setTasks([...tasks, newTask])
    setNewTask("")
  }

  return (
    <div style={{ maxWidth: 500, margin: "20px auto", fontFamily: "Arial" }}>
      <h1>📋 Worklog</h1>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="輸入任務..."
          style={{ flex: 1, padding: "8px" }}
        />
        <button onClick={addTask} style={{ padding: "8px 12px" }}>
          新增
        </button>
      </div>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
