export interface I_Meme{
    id?:number
    title:string
    text:string
    x:number
    y:number
    fontweight:string
    fontSize:number
    underline:boolean
    italic:boolean
    imageId:number|null
    color: string
};

export const DummyMeme:I_Meme={
    text:"Demat breizh",
    title:"titre",
    x:50,
    y:100,
    fontweight:'900',
    fontSize:30,
    underline: true,
    italic:false,
    imageId:0,
    color:'#ACEBA0'
};

export interface I_Image{
    id:number
    url:string
    w:number
    h:number
    name:string
};