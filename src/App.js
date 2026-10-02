import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [todos, setTodos] = useState(
    [
      {
        text: 'Completed React Project',
        date: '2024-06-01',
        completed: true
      }
    ])
  const addTodo = () => {
    if (!task.trim()) return;
    const newTodo = { text: task, date: new Date().toISOString().split('T')[0], completed: isCompleted };
    setTodos([...todos, newTodo]);
    setTask('');
    setIsCompleted(false);
  }

  const toggleCompleted = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  }

  const deleteTodo = (index) => {
  const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

return (
  <div className="container">
    <div className="title">React ToDo List</div>
    <div className="input-section">
      <input type="text" placeholder="Enter ToDo" value={task} onChange={(e) => setTask(e.target.value)} className="input-box" />
      <label className="checkbox-label">
        <input type="checkbox" checked={isCompleted} onChange={(e) => setIsCompleted(e.target.checked)} className="checkbox" />
        Completed?
      </label>
      <button className="add-btn" onClick={() => { addTodo() }}>Add</button>
    </div>
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li className={`todo-item ${todo.completed ? 'completed' : 'not-completed'}`} key={index}>
          <div className="todo-info">
            <div className="todo-text-date">
              <p className="todo-text">{todo.text}</p>
              <small className="todo-date">{todo.date}</small>
            </div>
          </div>
          <div className="actions">
            <button onClick={()=>toggleCompleted(index)} className={`status-btn ${todo.completed ? 'green' : 'red'}`}>{todo.completed ? 'Mark Not Done' : 'Mark Done'}</button>
            <button onClick={()=>deleteTodo(index)} className="delete-btn">{'\u{1F5D1}'}</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
)
}

export default App;
