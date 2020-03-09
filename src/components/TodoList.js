import React from "react"
import Item from './Item'


const Todo = props => {
  return(
    <div>
      {props.todo.map(item => (
        <Item
        key={item.id}
        item={item}
        toggleDone={props.toggleDone}
        />
      ))}
      <button
      onClick={props.delTodo}
      type='button'
      >Destroy Finished</button>
    </div>
  )
}

export default Todo
