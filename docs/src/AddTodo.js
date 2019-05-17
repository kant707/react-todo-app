import React from 'react';

class AddTodo extends React.Component {

  state = {
    todotext: '',
  }

  changeTodoText = (event) => {
    this.setState({
      todotext: event.target.value,
    })
  };

  submitHandler = (event) => {
    event.preventDefault(); // to prevent page reload after form submit.

    if(this.state.todotext === ""){
      return; // this will terminate function here
    }

    this.props.addTodoToState(this.state.todotext);

    this.setState({
      todotext: '',
    });

  };

  render(){

    return(
      <div>
        <form onSubmit={this.submitHandler} className="">
          <div className="form-group row mb-0">
            <div className="col-9 pr-0">
              <input
                type="text"
                className="form-control"
                placeholder="Type you todo here..."
                onChange={this.changeTodoText}
                value={this.state.todotext}
              />
            </div>
            <div className="col-3">
              <button
                type="submit"
                className="btn btn-primary btn-outline-primary btn-block"
                disabled={this.state.todotext ? false : 'disabled'}
              >
                Add Todo
              </button>
            </div>
          </div>
          <div className="valid-feedback" style={{display : `${this.state.todotext ? 'none': 'block'}`}}>Please enter your todo</div>
        </form>
      </div>
    );
  }
}

export default AddTodo;