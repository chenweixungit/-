import React, { memo, useState, useEffect } from 'react'
import { useSelector ,shallowEqual} from 'react-redux'

import { getCurrentSongLyric } from "@/services/player"
import { PlayerWrapper, PlayerLeft, PlayerRight } from './style'
import emitter from '@/common/event'
export default memo(function WXPlayer() {
    const [songLyric, setSongLyric] = useState([]);
    const [songTlyric, setSongTlyric] = useState([]);
    const [times, setTimes] = useState([]);
    const { currentSong } = useSelector(state => ({
        currentSong: state.getIn(["player","currentSong"])   
    }),shallowEqual);
    const [currentTime ,setCurrentTime] = useState(0);
    

    useEffect(()=>{
        const eventEmitter = emitter.addListener('currentTime',time=>{
            setCurrentTime(time);
        })
        return ()=>{
            emitter.removeListener(eventEmitter);
        }
    },[])
    useEffect(()=>{
        const id = (currentSong && currentSong.id) || "";
        if(id){
            getCurrentSongLyric(id).then((res)=>{

                const lyric = res.lrc.lyric
                const lrcs = lyric.split(/\n/);
                const tlyric = res.tlyric.lyric
                const tlrcs = tlyric.split(/\n/);
                const timeArr = [];
                const lyricArr = [];
                const tlyricArr = [];
                const map = new Map();
                const tmap = new Map();
                // const timeMap = new Map();
                lrcs.pop();
                for(let item of lrcs){
                    let m = Number.parseInt(item.substr(1,2));
                    let s = Number.parseFloat(item.substr(4,6));
                    let content = item.substr(11,item.length - 11);
                    timeArr.push(m * 60 + s);
                    lyricArr.push(content);
                    map.set(m * 60 + s,content);
                    // timeMap.set(content,m * 60 + s);
                };
                
                for(let item of tlrcs){
                    let m = Number.parseInt(item.substr(1,2));
                    let s = Number.parseFloat(item.substr(4,6));
                    let content = item.substr(11,item.length - 11);
                    // tlyricArr.push(content);
                    tmap.set(m * 60 + s,content);
                };
                
                for(let item of timeArr){
                    tmap.get(item) ? tlyricArr.push(tmap.get(item)) : tlyricArr.push("");
                }

                // const curLrcs = [];
                // const keys = map.keys();
                // for(let key of keys){
                //     // curLrcs.push(map.get(key));
                //     // tmap.get(key) && curLrcs.push(tmap.get(key))
                //     if(tmap.get(key)){
                //         tlyricArr.push(tmap.get(key));
                //     }else{
                //         tlyricArr.push("");
                //     }
                // }
                // console.log(curLrcs)
                // setCurrentSongLyric(curLrcs);
                // setTimes(timeMap);
                // console.log(timeMap)
                // console.log(res)
                setSongLyric(lyricArr);
                setSongTlyric(tlyricArr);
                setTimes(timeArr);
            })
        }
        
    },[currentSong])
    let curLyric = false;

    return (
        <PlayerWrapper>
            <div className='content wrap-v2'>
                <PlayerLeft>
                    <div className="player-info">
                        <div className="player-img sprite_covor">
                            <img src="https://p1.music.126.net/EMk0yFDMCo1mo7IoAVQtKQ==/18607035278626511.jpg?param=130x130" alt="/"></img>
                        </div>
                        <div className="song-detail">
                            <div className="song-name-container">
                                <div className="sprite_icon2 name-icon"></div>
                                <div className="song-name">
                                    <span>Where is your love</span>
                                </div>
                            </div>
                            <div>
                                <span>歌手：</span>
                                <a href="/#">J. Lisk</a>
                            </div>
                            <div>
                                <span>所属专辑：</span>
                                <a href="/#">Where is your love</a>
                            </div>
                            <div>
                                <ul>
                                    {
                                        songLyric.map((item,index)=>{
                                            if(!curLyric && index < songTlyric.length - 1 && currentTime <= times[index + 1]){
                                                curLyric = true;
                                                return (<div key={index}>
                                                            <h1 key={index + item}>{item}</h1>
                                                            <h1 key={index + songTlyric[index]}>{songTlyric[index]}</h1>
                                                        </div>)
                                            }else if(currentTime > times[songTlyric.length - 1] && index === songTlyric.length - 1){
                                                return (<div key={index}>
                                                    <h1 key={index + item}>{item}</h1>
                                                    <h1 key={index + songTlyric[index]}>{songTlyric[index]}</h1>
                                                </div>)
                                            }else{
                                                return (<div key={index}>
                                                    <li key={index + item}>{item}</li>
                                                    <li key={index + songTlyric[index]}>{songTlyric[index]}</li>
                                                </div>)
                                            } 
                                             
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </PlayerLeft>
                <PlayerRight>
                    right
                </PlayerRight>
            </div>
        </PlayerWrapper>

    )
})
