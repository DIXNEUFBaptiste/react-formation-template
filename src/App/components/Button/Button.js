import React from "react";
import style from './Button.module.css';

function Button(props) {
    console.log(props);
    //const textAdded = props.text+'Hello'
    return (
        <button className={style.Button} style={ {backgroundColor:props.bgcolor}}>{props.text}</button>
    );
}


export default Button;