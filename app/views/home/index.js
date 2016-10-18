import React, {Component} from 'react';

const ToDo = ({value, onClickDone, onClickClose, done}) => {
    let defaultClass = 'callout';
    defaultClass += done ? ' callout-success' : ' callout-info';
   return (
      <div className={defaultClass}>
        <button className='ficon ficon-checkmark mark-done' onClick={onClickDone}>Done</button>
        <span>{value}</span>
        <i className='close' onClick={onClickClose}>&times;</i>
      </div>
    )
}

const ToDoList = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        { value:'Be awesome', done: false },
        { value:'Learn React', done: true },
        { value:'Use JSX in my CodePens', done: true }
      ]
    }
  },
  addTodo () {
    const newValue = {
      value: this.state.inputValue,
      done: false
    };
    this.setState({
      todos: [...this.state.todos, newValue],
      inputValue: ''
    });

    return false;
  },
  handleChange (e) {
    this.setState({
      inputValue: e.target.value
    });
  },
  removeTodo(index) {
    const todos = this.state.todos.slice();
    todos.splice(index, 1);
    this.setState({
      todos
    });
  },
  markTodoDone (index) {
    const todos = this.state.todos;
    const todo = this.state.todos[index];
    todos.splice(index, 1);
    todo.done = !todo.done;

    todo.done ? todos.push(todo) : todos.unshift(todo);

    this.setState({
      todos: todos
    });
  },
  render () {

    const todos = this.state.todos.map((todo, index) => {
      return (
        <ToDo
        key={index}
        value={todo.value}
        done={todo.done}
        onClickClose={this.removeTodo.bind(this, index)}
        onClickDone={this.markTodoDone.bind(this, index)}
      /> );
    });

    return (
      <div className='container'>
        <div className='col-xs-6 col-xs-offset-3'>
          <h1>My Todo List</h1>
          {todos}
            <div className='input-group'>
              <label className='sr-only' htmlFor='todoInput'></label>
              <input type='text' value={this.state.inputValue}
                onChange={this.handleChange}
                className='form-control'
                placeholder='What do you need to do?'
              />
              <span className='input-group-btn'>
                <button onClick={this.addTodo} className='btn btn-default'>Add Todo</button>
              </span>
            </div>

        </div>
      </div>
    );
  }
});



export default ToDoList;
