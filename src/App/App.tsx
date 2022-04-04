import React from 'react';
import './App.css';
import Button from './components/Button/Button';


function App() {
  return (
    <div className="App">
      Hello world
      <Button text="text du button" bgcolor="red" eventClicked={(arg : any) => {
         console.log(arg);
      }}/>
      <Button text="text du button 2"/>
      <Button text="text du button 3"/>
      <Button text="text du button 3"/>
    </div>
  );
}

export default App;
