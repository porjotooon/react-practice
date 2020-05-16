import React from 'react'
import './App.css'
import TodoItem from "./TodoItem"
import todosData from "./todosData"

function App() {
  const todoComponent = todosData.map(todo => <TodoItem key={todo.id} text={todo.text}/>)
  return (
    <div className="todo-list">
      {todoComponent}
    </div>
  );
}

export default App;
