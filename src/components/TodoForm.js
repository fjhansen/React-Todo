import React from 'react'

class ToDoForm extends React.Component {
  constructor() {
    super();
    this.state= {
      item: ''
    };
  }
  handleChanges = e => {
    this.setState({
      item: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.item);
    this.setState({
      item: ''
    });
  }
  render() {
    console.log('V A L U E',document.forms['item'].value)
    return(
      <form onSubmit={this.handleSubmit} name="form">
        <input
        type='text'
        name='item'
        value={this.state.item}
        onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ToDoForm