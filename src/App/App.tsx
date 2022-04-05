import React, { Component } from "react";
import style from "./App.module.css";
import FlexWLayout from "./components/layouts/FlexWLayout/FlexWLayout";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import { DummyMeme as initialMemeState, I_Meme, I_Image } from "./interfaces/common";

interface I_AppProps {
  AppName?: string;
}
interface I_AppState {
  currentMeme : I_Meme
  images:Array<I_Image>
}



class App extends Component<I_AppProps, I_AppState> {
  constructor(props: I_AppProps) {
    super(props);
    this.state = { 
      currentMeme:initialMemeState,
      images:[{
        id:0,
        url:'futurama.jpg',
        w:1200,
        h:675,
        name:'futurama'
      }]
    };
  }
  componentDidMount() {
    console.log(
      "%c%s",
      "font-size:24pt;color:green;font-weight:900",
      "Le component App est monté"
    );
  }
  componentDidUpdate(oldProps:I_AppProps,oldState:I_AppState){
    console.log(
      "%c%s",
      "font-size:16pt;color:blue;font-weight:900",
      "==========cmp updated========"
    );
    console.log('props->',oldProps,this.props);
    console.log('state->',oldState,this.state);
    console.log(
      "%c%s",
      "font-size:16pt;color:blue;font-weight:900",
      "============================="
    );
  }
  render(): React.ReactNode {
    return (
      <div className={style.App}>
        <FlexWLayout>
          <MemeViewer 
            meme={this.state.currentMeme} 
            image={this.state.images.find(e=>e.id===this.state.currentMeme.imageId)}>
          </MemeViewer>
          <MemeForm></MemeForm>
        </FlexWLayout>
      </div>
    );
  }
}
export default App;