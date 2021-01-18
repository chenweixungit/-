import * as actionTypes from './constants'
import {getTopBanners ,getHotRecommend} from '@/services/recommend'

const changeTopBannersAction = (res)=>({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})

const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changeTopBannersAction(res))
        })
    }
}

const changeHotRecommendAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result
})

const getHotRecommendAction = (limit) =>{
    return dispatch => {
        getHotRecommend(limit).then(res=>{
            dispatch(changeHotRecommendAction(res))
        })
    }
}

export {
    getTopBannerAction,
    changeTopBannersAction,
    getHotRecommendAction,
    changeHotRecommendAction
}