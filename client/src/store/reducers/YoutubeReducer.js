import { REMOVE_YOUTUBE_LOADER, SET_YOUTUBE_CONTENT, SET_YOUTUBE_LOADER } from "../types/YoutubeType";

const initState = {
    loading: false,
    youtubeErrors: [],
    youtubeMessage: '',
    basic: "",
    audioFormats: {},
    videoFormats: {}
}

const YoutubeReducer = (state=initState, action) =>{
     if(action.type === SET_YOUTUBE_LOADER){
         return{...state, loading: true}
     }
     else if(action.type === REMOVE_YOUTUBE_LOADER){
         return{...state, loading: false}
     }
     else if(action.type === SET_YOUTUBE_CONTENT){
         return{...state, basic: action.payload.basic, audioFormats: action.payload.audioFormats, videoFormats: action.payload.videoFormats}
     }
     else{
         return state;
     }
}
export default YoutubeReducer;