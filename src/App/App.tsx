import React, { Component } from "react";
import style from "./App.module.css";
import FlexWLayout from "./components/layouts/FlexWLayout/FlexWLayout";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import { DummyMeme as initialMemeState, I_Meme, I_Image } from "./interfaces/common";
import { store } from "./store/store";


interface I_AppProps {
  AppName?: string;
}
interface I_AppState {
  currentMeme : I_Meme
  images:Array<I_Image>;
  memes:Array<I_Meme>;
}



class App extends Component<I_AppProps, I_AppState> {
  constructor(props: I_AppProps) {
    super(props);
    this.state = { 
      currentMeme:initialMemeState,
      memes:[],
      images:[]
    };
  }
  componentDidMount() {
    // console.log(
    //   "%c%s",
    //   "font-size:24pt;color:green;font-weight:900",
    //   "Le component App est monté"
    // );
    this.setState({memes:store.getState().ressources.memes, images: store.getState().ressources.images})
    store.subscribe( ()=> {
      this.setState({memes:store.getState().ressources.memes, images: store.getState().ressources.images})
    })
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
        {JSON.stringify(this.state)}
        <FlexWLayout>
          <MemeViewer 
            meme={this.state.currentMeme} 
            image={this.state.images.find(e=>e.id===this.state.currentMeme.imageId)}>
          </MemeViewer>
          <MemeForm
            currentMeme={this.state.currentMeme}
            images={this.state.images}
            onInputValueChange={(changedValuesObject: any) => {
              this.setState({currentMeme:{...this.state.currentMeme,...changedValuesObject}});
            }}
          />
        </FlexWLayout>
      </div>
    );
  }
}
export default App;