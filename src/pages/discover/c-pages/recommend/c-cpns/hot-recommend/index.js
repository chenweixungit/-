import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { HotRecommendWrapper } from './style'
import { getHotRecommendAction } from '../../store/acitonCreators'
import WXSongsCover from '@/components/songs-cover'
import ThemeHeaderRCM from "@/components/theme-header-rcm"

export default memo(function WXHotRecommend() {
    const dispatch = useDispatch();
    const {hotRecommends} = useSelector((state) => ({
        hotRecommends: state.get("recommend").get("hotRecommends")
    }), shallowEqual)
    useEffect(() => {
        dispatch(getHotRecommendAction(8));
    }, [dispatch])
    return (
        <HotRecommendWrapper>
            <ThemeHeaderRCM title="热门推荐" keywords={["华语","流行","摇滚","民谣","电子"]}></ThemeHeaderRCM>
            <div className="content">
            {
                hotRecommends.map((item) => {
                    return (
                        <div className="item" key={item.id}>
                            <WXSongsCover key={item.id} info={item}></WXSongsCover>
                        </div>
                    )
                })
            }
            </div>
        </HotRecommendWrapper>
    )
})
