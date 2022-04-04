import React,{ useState} from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

function Button(props) {
  console.log(props);
  //const textAdded = props.text+'Hello'
  const [clicked, setclicked] = useState(false)
  return (
    <button
      onClick={(evt) => {
          setclicked(true);
          setTimeout( ()=>{
            setclicked(false)
          }, 1000)
        props.eventClicked("Hello");
      }}
      className={style.Button }
      style={{...props.style, backgroundColor: props.bgcolor, color: props.color }}
      type={props.type}
      clicked
    >
      {props.text}
      {props.children}
      {clicked ? 'oui' :  'non'}

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
  style:  PropTypes.object
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
