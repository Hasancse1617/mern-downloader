import axiosInstance from "../../helper/axiosInstance";
import { REMOVE_YOUTUBE_LOADER, SET_YOUTUBE_CONTENT, SET_YOUTUBE_ERRORS, SET_YOUTUBE_LOADER } from "../types/YoutubeType"

export const YoutubeVideo = (state) =>{
    return async (dispatch) =>{
        try {
           dispatch({type: SET_YOUTUBE_LOADER});
           const { data } = await axiosInstance.post("/video", state);
           dispatch({type: SET_YOUTUBE_CONTENT, payload: {basic: data.basic, audioFormats: data.audioFormats, videoFormats: data.videoFormats}});
           dispatch({type: REMOVE_YOUTUBE_LOADER});
        //    console.log(data)
        } catch (error) {
            dispatch({type: REMOVE_YOUTUBE_LOADER});
            dispatch({type: SET_YOUTUBE_ERRORS, payload: error.response.data.errors});
        }
    }
}

export const DownloadVideo = (state) =>{
    return async (dispatch) =>{
        try {
        //    dispatch({type: SET_YOUTUBE_LOADER});
           const { data } = await axiosInstance.post("/download-video", state);
        //    dispatch({type: SET_YOUTUBE_CONTENT, payload: {basic: data.basic, audioFormats: data.audioFormats, videoFormats: data.videoFormats}});
        //    dispatch({type: REMOVE_YOUTUBE_LOADER});
        //    console.log(data)
        } catch (error) {
            dispatch({type: REMOVE_YOUTUBE_LOADER});
            dispatch({type: SET_YOUTUBE_ERRORS, payload: error.response.data.errors});
        }
    }
}