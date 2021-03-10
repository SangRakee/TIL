import React, { Component } from 'react';
import {List} from 'semantic-ui-react';

class TodoItem extends Component {
    render() {
        const {todo} = this.props;
        return (
          <List.Item>
            <List.Content>
              <List.Header as='a'>{todo.contents}</List.Header>
            </List.Content>
            <List.Icon name='github' size='large' verticalAlign='middle' />
          </List.Item>
        );
    }
}

export default TodoItem;