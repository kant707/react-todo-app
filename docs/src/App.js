import React, { Component } from 'react';
import './bootstrap4.min.css';
import './App.css';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

class App extends Component {

  state = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    // todos: [
    //   {
    //     text: "Buy Milk",
    //     completed: false,
    //   },
    //   {
    //     text: "Buy Egg",
    //     completed: true,
    //   }
    // ]
  }

  toggleComplete = (index) =>{
    const newTodos = this.state.todos.map((todo, i) => {
      if(index === i ) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    this.setState({
      todos: newTodos,
    });
  };

  deleteTodoFromState = (index) => {
    const newTodos = this.state.todos.filter((todo, i) => {
      if(index === i){
        return false;
      }

      return true;

    });

    this.setState({
      todos: newTodos,
    }, () => {
      localStorage.setItem('todos', JSON.stringify(newTodos));
    });
  }

  editTodoFromState = (index, newText) => {
    const newTodos = this.state.todos.map((todo, i) => {
      if(index === i) {
        return {
          ...todo,
          text: newText,
        }
      }

      return todo;
    });

    //localStorage.setItem('todos', JSON.stringify(newTodos));

    this.setState({
      todos: newTodos,
    }, () => {
      localStorage.setItem('todos', JSON.stringify(newTodos));
    });
  };

  addTodoToState = (text) => {
    const newTodos = [{
      text: text,
      completed: false,
    }, ...this.state.todos];

    this.setState({
      todos: newTodos,
    }, () => {
      localStorage.setItem('todos', JSON.stringify(newTodos));
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <ul className="list-group" style={{height: '281px', overflow: 'auto'}}>
              {
                this.state.todos.map((todo, index) => {
                  return (
                    <TodoItem
                      todo={todo}
                      key={index}
                      index={index}
                      toggleComplete={this.toggleComplete}
                      deleteTodoFromState={this.deleteTodoFromState}
                      editTodoFromState={this.editTodoFromState}
                    />
                  );
                })
              }
            </ul>
            <hr />
            <div className="card">
              <div className="card-body">
                <AddTodo
                  addTodoToState={this.addTodoToState}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;