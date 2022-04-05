import React from "react";
import { connect } from "react-redux";
import { I_Image, I_Meme } from "../../interfaces/common";
import {unConnectedMemeViewer as UCMemeViewer} from "../MemeViewer/MemeViewer";
import style from './MemeThumbnail.module.scss'
interface I_MemeThumbnailProps {
  memes: Array<I_Meme>;
  images: Array<I_Image>;
}

export const MemeThumbnail: React.FC<I_MemeThumbnailProps> = (props) => {
  return <div className={style.MemeThumbnail}>
    {props.memes.map((e,i)=>{
      return <UCMemeViewer meme={e} image={props.images.find(i=>i.id===e.imageId)}/>
    })}
  </div>;
};

const mapStateToProps = (state: any, props: any) => {
  return {
    ...props,
    memes:state.ressources.memes,
    images:state.ressources.images,
  };
};

const mapDispatchToProps =()=>{};

export default connect(mapStateToProps, mapDispatchToProps)(MemeThumbnail);