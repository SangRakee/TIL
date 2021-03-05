// import React, { Component } from 'react';
import React,{useState} from 'react';
import Counter from './Counter';
import Result from './Result';

//State Hook을 사용한 function component
function App(){
  //변경데이터 state 선언
  const [count, setCount] = useState(0);

  return (
      <div>
         <Counter count={count} 
                increase={()=>setCount(count+1)} 
                decrease={()=>setCount(count-1)}/>
         <Result count={count} />   
       </div>
  );
}
// class App extends Component {
//   //변경데이터는 state를 사용
//   //변경데이터 state 초기화 - constructor
//   constructor(props){
//     super(props);
//     this.state ={
//       count : 0,
//     }
//   }

//   onIncrease = ()=>{
//     //state data 변경은 - setState()
//     //this.state.count += 1; //error
//     this.setState(
//       {
//         count : this.state.count+1,
//       }
//     );
//   }
   
//   onDecrease = ()=>{
//     this.setState(
//       {
//         count : this.state.count-1,
//       }
//     );
//   }
 
//   render() {
//     return (
//       <div>
//         <Counter count={this.state.count} 
//                increase={this.onIncrease} 
//                decrease={this.onDecrease}/>
//         <Result count={this.state.count} />   
//       </div>
//     );
//   }
// }

 export default App;
