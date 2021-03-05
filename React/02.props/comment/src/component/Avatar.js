import React from 'react';


function Avatar(props) {
    return (
        <div>
            <img
            className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
            /> 
        </div>
    );
}

export default Avatar;