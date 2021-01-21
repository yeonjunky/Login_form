import React from 'react';
import './Input.css';

function Input(props) {
    return (
        <>
            <p>
                {props.text}
            </p>
            <input type={props.type}>

            </input>
        </>
    );
}


export default Input;