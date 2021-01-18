import React, { memo, useEffect, useRef ,useCallback, useState} from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { Carousel } from 'antd';

import { BannerWrapper, BannerControl, BannerLeft, BannerRight } from './style'
import { getTopBannerAction } from "../../store/acitonCreators"


export default memo(function WXTopBanner(props) {

    const [currentIndex , setCurrentIndex] = useState(0);

    const dispatch = useDispatch();
    // 进行浅层比较
    const { topBanners } = useSelector(state => ({
        topBanners: state.get("recommend").get("topBanners")
    }), shallowEqual)
    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch])


    // 控制轮播
    const bannerRef = useRef();
    const bannerChange = useCallback((from,to)=>{
        setTimeout(()=>{
            setCurrentIndex(to)
        },0)
    },[])
    const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")

    
    return (
        <BannerWrapper  bgImage={bgImage}>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
                        {
                            topBanners.map((item, index) => {
                                return (
                                <div className="banner-item" key={item.imageUrl}>
                                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                                </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight>
                </BannerRight>
                <BannerControl>
                    <button className="btn left" onClick={()=>bannerRef.current.prev()}></button>
                    <button className="btn right" onClick={()=>bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})
