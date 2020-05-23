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
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo =>{
        if(id === todo.id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render(){
    const todoComponent = this.state.todo.map(item => <TodoItem key={item.id} 
      item={item}
      handleChange={this.handleChange} />)
    
    return (
      <div className="todo-list">
        {todoComponent}
      </div>
    );

  }
}

export default App;
