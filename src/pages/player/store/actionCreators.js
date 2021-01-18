import * as actionTypes from "./constants";
import {getCurrentSong} from "@/services/player"

export const changeCurrentSongAction = (res)=>({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong: res.songs[0] 
})

export const getCurrentSongAction = (ids)=>{
    return dispatch =>{
        getCurrentSong(ids).then(res=>{
            dispatch(changeCurrentSongAction(res))
        })
    }
}