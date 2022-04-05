import React,{ useEffect, useState} from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

function Button(props) {
  //console.log(props);
  //const textAdded = props.text+'Hello'
  
  const [clicked, setclicked] = useState(false)
  
  useEffect(() => {
    if(clicked){
        setTimeout(()=>{setclicked(false)}, 350);
    }
  }, [clicked])

  useEffect(() => {
    console.log('le composant est monté')
  }, [])


  return (
    <button
      onClick={(evt) => {
          setclicked(true);
          
        props.eventClicked("Hello");
      }}
      className={`${style.Button}${clicked?' '+style.clicked:''}`}
      style={{...props.style, backgroundColor: props.bgColor, color: props.color }}
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
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  type: PropTypes.string,
  style:  PropTypes.object
};

Button.defaultProps = {
  eventClicked: () => {
    console.error("Function undefined");
  },
  bgColor: "red",
  color: "black",
  type: "button",
};

export default Button;
