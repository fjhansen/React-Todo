import React from 'react';
import ToDoForm from './components/ToDoForm';
import Todo from './components/ToDoList'

const todo = [
  {
  name: 'make ToDo list',
  id: 234,
  done: false
},
{
  name: 'add styling',
  id: 244,
  done: false
}
]

class App extends React.Component {
constructor() {
  super();
  this.state= {
    todo: todo,
    name: '',
    done: false
  };
}

toggleDone = clickedItemId => {
  this.setState({
    todo: this.state.todo.map(item => {
      if (item.id === clickedItemId) {
        return {
          ...item,
          done: !item.done
        };
      } else {
        return item;
      }
    })
  })
}
addItem = itemName => {
  const newItem = {
    name: itemName,
    id: new Date(),
    done: false
  }
  this.setState({
    todo: [...this.state.todo, newItem]
  })
}

delTodo = () => {
  this.setState({
    todo: this.state.todo.filter(todo => !todo.done)
  })
}

// toggleDestroy = clickedItemId => {
//   this.setState({
//     todo: this.state.todo.filter(item => {
//       if (item.done === clickedItemId) {
//         return {
//           ...item,
//           todo: '',
//           name: '',
//           done: false
//         }
//       } else {
//         return item;
//       }
//     })
//   })
// }
  render() {
    return (
      <div className="todobox">
        <div className="todoTop" >
      <h1>To Do List</h1>
      <button
      onClick={this.delTodo}
      type='button'
      style={{color:'rgb(220, 42, 255)', border:'0', background:'#2d2d37', padding: '0% 0%', width: '14%', fontSize:'1.3em'}}
      >Destroy Finished</button>
                
        </div>
        <div className="todoBottom">
        <Todo
        todo={this.state.todo}
        toggleDone={this.toggleDone}
        delTodo={this.delTodo}
        
        />
        <ToDoForm addItem={this.addItem}/>
        </div>
      </div>
      );
  }

}

export default App;
