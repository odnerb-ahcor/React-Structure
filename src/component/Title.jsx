import React from 'react';

function Title(props) {

    const { title } = props;

    return(
        <h1 className="title">{title}</h1>
    )
}

export default Title;
