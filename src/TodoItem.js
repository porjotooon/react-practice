import React from "react";
import "./TodoItem.css";

// function TodoItem(props){
//     return(
//         <div className="todo-item">
//             <input type="checkbox" checked={props.item.completed}></input>
//             <p>{props.item.text}</p>
//         </div>
//     )
// }

class TodoItem extends React.Component{
    render(){
        return(
            <div className="todo-item">
                <input 
                    type="checkbox" 
                    checked={this.props.item.completed}
                >                 
                </input>
                <p>{this.props.item.text}</p>
            </div>
        )
    }
}

export default TodoItem;