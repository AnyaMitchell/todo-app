import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: tasks.length + 1, text: task, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

const editTask = (id, newText) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, text: newText };
      }
      return task;
    }));
  };
  return (
    <div className="App">
      <h1>To-do</h1>
      <TodoForm addTask={addTask} />
      <TodoList 
            tasks={tasks} 
            deleteTask={deleteTask} 
            toggleComplete={toggleComplete}
            editTask={editTask}
          />
    </div>
  );
}

export default App;

 

