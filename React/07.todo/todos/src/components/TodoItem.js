import React, { Component } from 'react';
import './css/TodoItem.css';

class TodoItem extends Component {
    render() {
        const {todo, onDelete} = this.props;

        return (
          <li className="shadow" >
            <i  aria-hidden="true" className="checkBtn fa fa-check"></i>
                {todo.contents}
            <span type="button" className="removeBtn" todo={todo} onClick={onDelete}>
                <i aria-hidden="true" className="fa fa-trash-o"></i>
            </span>
          </li>
        );
    }
}

export default TodoItem;