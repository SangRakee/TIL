import React, { Component } from 'react';
import TodoItem from './TodoItem';

const style={
    listStyleType: 'none',
    paddingLeft: '0',
    marginTop: '0',
    textAlign: 'left',
}

class TodoList extends Component {
    render() {
        const {todos, onDelete} = this.props;
        const todoList = todos.map((todo)=>{ 
            return <TodoItem key={todo.id} todo={todo} onDelete={onDelete}/>
        });

        return (
            <div>
                <section>
                    <ul sytle={style}>{todoList}</ul>
                </section>
                 
            </div>
        );
    }
}

export default TodoList;