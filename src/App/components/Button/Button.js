import React from "react";
import style from './Button.module.css';
import PropTypes from 'prop-types';

function Button(props) {
    console.log(props);
    //const textAdded = props.text+'Hello'
    return (
        <button onClick={(evt) => {
            props.eventClicked("Hello")
        }} 
        className={style.Button} 
        style={ {backgroundColor:props.bgcolor}}>
            {props.text}
        </button>
    );
}

Button.propTypes={
    text: PropTypes.string.isRequired,
    eventClicked: PropTypes.func.isRequired,
    bgcolor : PropTypes.string
}

Button.defaultProps={
    eventClicked: () =>{
        console.error('Function undefined')
    }
}

export default Button;