import React from "react"
import Item from './Item'


const Todo = props => {
  return(
    <div className="todo-list">
      {props.todo.map(item => (
        <Item
        key={item.id}
        item={item}
        toggleDone={props.toggleDone}
        />
      ))}
      
    </div>
  )
}

export default Todo
