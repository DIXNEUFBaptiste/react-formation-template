import React, { Component } from "react";
import style from "./App.module.css";
import Button from "./components/Button/Button";
import FlexWLayout from "./components/layouts/FlexWLayout/FlexWLayout";
import MemeForm from "./components/MemeForm/MemeForm";
import  MemeThumbnail  from "./components/MemeThumbnail/MemeThumbnail";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import { REST_SRV_BASE_URL } from "./config/config";
import {
  DummyMeme as initalMemeState,
  I_Image,
  I_Meme,
} from "./interfaces/common";
import {RessourcesActions, store} from './store/store'
interface I_AppProps {
  AppName?: string;
}
// interface I_AppState {
//   currentMeme: I_Meme;
//   images: Array<I_Image>;
//   memes: Array<I_Meme>;
// }
class App extends Component<I_AppProps> {
  // constructor(props: I_AppProps) {
  //   super(props);
  //   // this.state = {
  //   //   currentMeme: initalMemeState,
  //   //   memes: [],
  //   //   images: [],
  //   // };
  // }
  componentDidMount() {
    // console.log(
    //   "%c%s",
    //   "font-size:24pt;color:green;font-weight:900",
    //   "Le component App est monté"
    // );
    // this.setState({memes:store.getState().ressources.memes,images:store.getState().ressources.images});
    // store.subscribe(()=>{
    //   this.setState({memes:store.getState().ressources.memes,images:store.getState().ressources.images})
    // })
  }
  // componentDidUpdate(oldProps: I_AppProps, oldState: I_AppState) {
  //   console.log(
  //     "%c%s",
  //     "font-size:16pt;color:blue;font-weight:900",
  //     "==========cmp updated========"
  //   );
  //   console.log("props->", oldProps, this.props);
  //   console.log("state->", oldState, this.state);
  //   console.log(
  //     "%c%s",
  //     "font-size:16pt;color:blue;font-weight:900",
  //     "============================="
  //   );
  // }
  render(): React.ReactNode {
    return (
      <div className={style.App}>
        {JSON.stringify(this.state)}
        <MemeThumbnail/>
        <FlexWLayout>
          <div>
            <MemeViewer/>
          </div>
          <MemeForm/>
        </FlexWLayout>
      </div>
    );
  }
}
export default App;