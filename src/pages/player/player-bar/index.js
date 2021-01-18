import React, { memo, useEffect, useRef, useCallback, useState } from 'react'
import { Slider } from 'antd'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { PlayerBarWrapper ,Operator} from './style'
import { getCurrentSongAction } from "../store/actionCreators"
import { getPlaySong ,getSizeImage} from '@/utils/format-utils'
import { formatDate } from '../../../utils/format-utils'
import { NavLink } from 'react-router-dom'

import emitter from '@/common/event'

const WXPlayerBar = memo(function WXPlayerBar() {

    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isChanging, setIsChanging] = useState(false);
    const dispatch = useDispatch();
    const playerRef = useRef();
    const { currentSong } = useSelector(state => ({
        currentSong: state.getIn(["player", "currentSong"])
    }), shallowEqual)
    
    
    const onchangEvent = useCallback((value) => {
        const changeTime = value / 100000 * duration
        setIsChanging(true);
        setCurrentTime(changeTime);
        setProgress(value);
    },[duration])

    const onAfterChangeEvent = useCallback((value) => {
        //s
        const changeTime = value / 100000 * duration
        setCurrentTime(changeTime);
        setProgress(value);
        playerRef.current.currentTime = changeTime;
        setIsChanging(false);
    },[duration])

    const changTimeEvent = (e) => {
        if(!isChanging){
            // ms
            setCurrentTime(e.target.currentTime)
            setProgress(e.target.currentTime / duration * 100 * 1000);
            emitter.emit('currentTime',e.target.currentTime);
        }
    }


    const showDuration = formatDate(duration, "mm:ss")
    const showCurrentTime = formatDate(currentTime * 1000,"mm:ss");
    const songName = (currentSong && currentSong.name) || "暂无歌曲";
    const singer = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
    const imgUrl = getSizeImage((currentSong.al && currentSong.al.picUrl),35);

    useEffect(() => {
        dispatch(getCurrentSongAction("458725081"))
    }, [dispatch])

    useEffect(() => {
        setDuration(currentSong.dt);
        playerRef.current.src = getPlaySong("458725081");
    }, [currentSong])

    const playOrPause = useCallback((e) => {
        !isPlaying ? playerRef.current.play() : playerRef.current.pause();
        setIsPlaying(!isPlaying)
    }, [isPlaying])
    
    
    return (
        <PlayerBarWrapper className="sprite_player" isPlaying={isPlaying} >
            <div className="bar-content wrap-v2">
                <div className="left">
                    <div className="control">
                        <button className="sprite_player prev" ></button>
                        <button className="sprite_player player" onClick={
                            (e) => {
                                playOrPause()
                            }}></button>
                        <button className="sprite_player next"></button>
                    </div>
                    <div className="info">
                        <NavLink to="/discover/player">
                            <div className="image">
                                <img src={imgUrl} alt=""></img>
                            </div>
                        </NavLink>
                        <div className="info-box">
                            <div className="song-info">
                                <a className="song-name" href="todo">{songName}</a>
                                <a className="song-author" href="todo">{singer}</a>
                            </div>
                            <div className="song-progress">
                                <Slider defaultValue={0} value={progress} onChange={onchangEvent} onAfterChange={onAfterChangeEvent}/>
                                <div className="time">
                                    <span className="now-time">{showCurrentTime}</span>
                                    <span className="divider">/</span>
                                    <span className="duration">{showDuration}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Operator>
                    <button className="sprite_player btn favor"></button>
                    <button className="sprite_player btn share"></button>
                    <button className="sprite_player btn volume"></button>     
                    <button className="sprite_player btn loop"></button>
                    <button className="sprite_player btn playlist"></button>
                </Operator>
            </div>
            <audio onTimeUpdate={e => { changTimeEvent(e) }}  ref={playerRef} />
        </PlayerBarWrapper>
    )
})

export default WXPlayerBar