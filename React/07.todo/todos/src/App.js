import React, { Component } from "react";
import TodoListView from "./view/TodoListView";
import TodoEditFormView from "./view/TodoEditFormView";
import { generateId } from "./IDGenerator";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: { id: "", title: "", date: new Date() },
    };
  }

  inputInit = () => {
    this.setState({
      todo: {},
    });
  };

  onSetTodoProp = (name, value) => {
    this.setState({ todo: { ...this.state.todo, [name]: value } });
  };

  onAddTodo = () => {
    const { todo, todos } = this.state;
    this.setState({
      todo: todo,
      todos: todos.concat({ ...todo, id: generateId(5) }),
    });
  };

  onRemoveTodo = () => {
    const { todo, todos } = this.state;
    this.setState({
      todos: todos.filter((element) => element.id !== todo.id),
    });

    this.inputInit();
  };

  onModifyTodo = () => {
    const { todo, todos } = this.state;
    // let index = todos.findIndex((element) => element.id === todo.id);
    this.setState({
      todos: todos.map((element) => (element.id === todo.id ? todo : element)),
    });
    // this.setState({
    //   todos: [
    //     ...todos.slice(0, index),
    //     todo,
    //     ...todos.slice(index + 1, todos.length),
    //   ],
    // });
    this.inputInit();
  };

  onSelectTodo = (id) => {
    this.setState({
      todo: this.state.todos.find((todo) => todo.id === id),
    });
  };

  render() {
    const { todos, todo } = this.state;

    return (
      <div>
        <TodoEditFormView
          todo={todo}
          onSetTodoProp={this.onSetTodoProp}
          onAddTodo={this.onAddTodo}
          onRemoveTodo={this.onRemoveTodo}
          onModifyTodo={this.onModifyTodo}
        />
        <TodoListView todos={todos} onSelectTodo={this.onSelectTodo} />
      </div>
    );
  }
}

export default App;
