import React from 'react';

function Button(props) {

    const { titulo } = props;

    return(
        <h1 className="titulo">{titulo}</h1>
    )
}

export default Button;
