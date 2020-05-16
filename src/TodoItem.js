import React from "react";
import "./TodoItem.css";

function TodoItem(props){
    return(
        <div className="todo-item" style={{display: props.completed %% "none"}}>
            <input type="checkbox"></input>
            <p>{props.text}</p>
        </div>
    )
}

export default TodoItem;