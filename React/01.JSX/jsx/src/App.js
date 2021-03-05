import React, { Component } from 'react';

class App extends Component {
    // Javascript 주석
   formatName(user){
      return user.firstName+' '+user.lastName; 
   }

   render() {
  //   function formatName(user){
  //     return user.firstName+' '+user.lastName; 
  //  }
   
    const user={
      firstName : 'React',
      lastName : 'Component',
    }
    
    const type="class";
    //JSX - camelcase표현식  backgroud-color ==> backgroundColor
    //      class ==>className
    const style={
      backgroundColor : 'black',
      color:'aqua',
      fontSize:'50px',
      fontWeight:'bold',
      padding:6,
    }
    return (
      <div>
        {/* JSX 문법 주석 */}
        {/*
             JSX - HTML code , {Javascript 표현식} 
             one root element로 감싸야한다. 
        
        */}
        <div style={style}> Hello {this.formatName(user)}. - {type}</div>
     </div>
    );
  }
}

export default App;
