import React from 'react'
import './App.css'
import TodoItem from "./TodoItem"
import todosData from "./todosData"

// function App() {
//   const todoComponent = todosData.map(item => <TodoItem key={item.id} item={item}/>)
//   return (
//     <div className="todo-list">
//       {todoComponent}
//     </div>
//   );
// }

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todo: todosData
    }
  }
  render(){
    const todoComponent = this.state.todo.map(item => <TodoItem key={item.id} item={item}/>)
    return (
      <div className="todo-list">
        {todoComponent}
      </div>
    );

  }
}

export default App;
