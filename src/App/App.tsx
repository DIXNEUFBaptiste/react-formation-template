import React from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      Hello world
      <Button
        text="text du button"
        bgcolor="red"
        eventClicked={(arg: any) => {
          console.log(arg);
        }}
      >
        Hello
      </Button>
      <Button text="text du button 2">
        <div>Hello</div>
      </Button>
      <Button text="text du button 3">
        <div>Hello</div>
        <div>Image</div>
      </Button>
      <Button bgcolor="blue" color="green" text="text du button 4">
      </Button>
      <Button style={{border : '1px solid'}} text="text du button 4">
      </Button>

    </div>
  );
}

export default App;
