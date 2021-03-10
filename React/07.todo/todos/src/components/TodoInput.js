import React, { Component } from 'react';
import './css/TodoInput.css';

class TodoInput extends Component {
    render() {
      const {todo, onChangeConents, onInsert} = this.props;
      
      return (
        <div className="inputBox shadow">
            <form >
                <input type="text" 
                       placeholder="일정을 입력하세요" 
                       value={todo.contents}
                       onChange={onChangeConents}/>
                <span className="addContainer" onClick={onInsert}>
                    <i aria-hidden="true" className="addBtn fa fa-plus">
                    </i>
                </span>
            </form>         
        </div>
        );
    }
}

export default TodoInput;