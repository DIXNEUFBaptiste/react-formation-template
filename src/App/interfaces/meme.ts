export interface I_Meme{
    id?:number
    text:string
    x:number
    y:number
    fontweight:string
    fontSize:number
    underline:boolean
    italic:boolean
    imageId:number
};

export const DummyMeme:I_Meme={
    text:"Demat breizh",
    x:50,
    y:100,
    fontweight:'900',
    fontSize:30,
    underline: true,
    italic:false,
    imageId:0

};

export interface Image{
    id:number
    url:string
    w:number
    h:number
    name:string
};