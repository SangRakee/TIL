import React from 'react';
function sum(count){
    let sum=0;
    for(let i=1; i< count+1; i++)
        sum += i;
    return sum; 
}

function Result(props) {
    return (
        <div>
            <hr/>
            <h2> 0~{props.count} 합 :  {sum(props.count)}</h2>
        </div>
    );
}

export default Result;