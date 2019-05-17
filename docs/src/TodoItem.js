import React from 'react';

class TodoItem extends React.Component {

  state = {
    isEditing: false,
  }

  toggleEditing = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  clickHandler = () => {
    this.props.toggleComplete(this.props.index);
  }

  deleteTodo = () => {
    this.props.deleteTodoFromState(this.props.index);
  }

  editTodoSubmitHandler = (event) => {
    event.preventDefault();
    this.props.editTodoFromState(this.props.index, this.newText.value);
    this.toggleEditing();
  }

  render() {

    // const { todo } = this.props;
    const todo = this.props.todo;

    if(this.state.isEditing) {
      return (
        <li className="list-group d-block">
          <form className="list-group-item" style={{borderBottom: "0"}} onSubmit={this.editTodoSubmitHandler}>
            <div className="form-group row m-0">
              <div className="col-9 pr-0 pl-0">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  defaultValue={todo.text}
                  ref={
                    (node) => {
                      this.newText = node;
                    }
                  }
                />
              </div>
              <div className="col-3 p-0">
                <button type="submit" className="btn btn-sm btn-primary btn-outline-primary ml-1">Save</button>
                <button type="button" onClick={this.toggleEditing} className="btn btn-sm btn-dark btn-outline-dark ml-2">Cancel</button>
              </div>
            </div>
          </form>
        </li>
      );
    }

    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-9 form-check" style={{paddingTop: "2px"}}>
            <label className={`form-check-label d-block ${todo.completed ? "completed" : ""}`} style={{paddingLeft: "15px"}} onChange={this.clickHandler} >
              <input className="form-check-input" type="checkbox" value=""  />
              {todo.text}
            </label>
          </div>
          <div className="col-3 p-0">
            <button
              type="button"
              onClick={this.toggleEditing}
              className="btn btn-info btn-sm ml-2"
              style={{visibility: todo.completed ? 'hidden' : 'visible'}}
            >
              Edit
            </button>
            <button type="button" onClick={this.deleteTodo} className="btn btn-danger btn-sm ml-2">Delete</button>
          </div>
        </div>
      </li>
    );
  }
}

export default TodoItem;