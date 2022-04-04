import React from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

function Button(props) {
  console.log(props);
  //const textAdded = props.text+'Hello'
  return (
    <button
      onClick={(evt) => {
        props.eventClicked("Hello");
      }}
      className={style.Button}
      style={{ backgroundColor: props.bgcolor, color: props.color }}
      type={props.type}
    >
      {props.text}
      {props.children}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  eventClicked: PropTypes.func.isRequired,
  bgcolor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
};

Button.defaultProps = {
  eventClicked: () => {
    console.error("Function undefined");
  },
  bgcolor: "red",
  color: "black",
  type: "button",
};

export default Button;
