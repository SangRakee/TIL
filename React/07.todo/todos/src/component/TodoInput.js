import React, { Component } from 'react';
import {Form, Button} from 'semantic-ui-react';


class TodoInput extends Component {
  
    render() {
        const {todo} = this.props;
        return (
          <div>
              <Form>
                  <Form.Input
                     label ="Contents"
                     placeholder="일정을 입력하세요"
                     value={todo && todo.contents ? todo.contents : ''}                  
                   />  
              </Form>
              <Button primary> ADD  </Button>
          </div>
        );
    }
}

export default TodoInput;