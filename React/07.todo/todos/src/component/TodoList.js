import React, { Component } from 'react';
import {List} from 'semantic-ui-react';
import TodoItem from './TodoItem';

class TodoList extends Component {
   
    render() {
        const todoList=[];
        const {todos} = this.props;
        
        todos.forEach(todo => {
            todoList.push(
                <TodoItem todo={todo}/>
            );
        });

        return (
            <div>
              <header>
                <h1>TODO It!</h1>
              </header>
              <List divided relaxed>
                {todoList}
              </List>
                
            </div>
        );
    }
}

export default TodoList;