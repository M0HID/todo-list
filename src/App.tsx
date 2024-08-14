import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="px-8 py-4 m-4 app-container">
      <div className="mb-4 text-2xl text-green-700 header">To-Do List</div>
      
      <div className="mb-4 input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="px-4 py-2 border rounded-full"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 ml-4 text-white bg-green-700 rounded-full"
        >
          Add Task
        </button>
      </div>
      
      <div className="tasks-container">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`task-item flex justify-between items-center p-4 mb-2 rounded-full ${
              task.completed ? 'bg-green-500' : 'bg-green-700'
            }`}
          >
            <span
              onClick={() => toggleTaskCompletion(index)}
              className={`task-text text-white cursor-pointer ${
                task.completed ? 'line-through' : ''
              }`}
            >
              {task.text}
            </span>
            <button
              onClick={() => removeTask(index)}
              className="text-red-500 remove-task-btn hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
