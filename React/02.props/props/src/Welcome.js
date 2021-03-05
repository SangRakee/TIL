import React from 'react';
import PropTypes from 'prop-types';

//React Component 선언 : function(lamda function), Class
// <부모element key='value'>content</부모element>
// ex)<Welcome name='React' />
// 부모element로 부터 전달된 attibute값이나 content는 props에 저장 전달
// 자식element에서는 function에서 : arguement로 전달된 props 사용
//                  class에서 : 상속받은 React.Component의 this.porps 사용
// *props : readOnly
// const Welcome = (props) => {
//     return (
//         <div>
//            <h1>Hello, {props.name} </h1> 
//         </div>
//     );
// };
function Welcome(props){
    return (
        <div>
            <h1 style={props.style}>
                Hello, {props.name} ==&gt; {props.children}
            </h1>
        </div>
    );
}

//부모 element로 부터 props값이 전달되지 않을때 기본값
Welcome.defaultProps ={
    style : {
        backgroundColor : 'gray',
        color:'aqua',
        fontSize:'30px',
        fontWeight:'bold',
        padding:6,
    },
    name :'리액트',
}

//props의 타입 
Welcome.propTypes ={
    name : PropTypes.string,
    style : PropTypes.object
}

export default Welcome;

// import React, { Component } from 'react';

// class Welcome extends Component {
//     render() {
//         // 부모 element App attribute의 값 : props 객체로 참조  
//         const name = this.props.name; //name 참조 <Welcome name="값"/>
//         const style = this.props.style; //style참조 <Welcome style="값"/>
//        // const {name, style} = this.props;
//         return (
//             <div>
//                 <h1 style={style}>Hello, {name}</h1>         
//             </div>
//         );
//     }
// }

// export default Welcome;