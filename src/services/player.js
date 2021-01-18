import request from './request'

export function getCurrentSong(ids){
    return request({
        url: "/song/detail",
        params:{
            ids
        }
    })
}
export function getCurrentSongLyric(id){
    return request({
        url: `/lyric?id=${id}`
    })
}