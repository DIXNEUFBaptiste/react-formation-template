
const initialRessourcesState={
    images:[],
    meme:[],
}

export const RessourcesAction=Object.freeze({
    ADD_IMAGES: 'ADD_IMAGES', 
    ADD_INIT_MEMES: 'ADD_INIT_MEMES',
    ADD_MEME: 'ADD_MEME'
});


function ressourceReducer(state=initialRessourcesState, action){
    switch(action.type){
        case RessourcesAction.ADD_IMAGES:return {...state, images:action.values}
        case RessourcesAction.ADD_INIT_MEMES:return {...state, memes:action.values}
        case RessourcesAction.ADD_MEME:return {...state, memes:[...state.memes,action.values]}
        
        default: return state;
    }
}