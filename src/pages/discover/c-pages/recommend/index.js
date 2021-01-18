import React, { memo } from 'react'

import WXTopBanner from './c-cpns/top-banner'
import WXHotRecommend from './c-cpns/hot-recommend'

import { 
    RecommendWrapper,
    Content,
    RecommendLeft,
    RecommendRight
} from './style';

function WXRecommend(){
    return(
       <RecommendWrapper>
            <WXTopBanner></WXTopBanner>
            <Content className="wrap-v2">
                <RecommendLeft>
                    <WXHotRecommend></WXHotRecommend>
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
       </RecommendWrapper>
    )
}
export default memo(WXRecommend)

// function WXRecommend(props) {

//     useEffect(() => {
//         props.getTopBanners();
//     }, [])

//     return (
//         <div>
//             recommend
//         </div>
//     )
// }

// const mapStateToProps = state => {
//     console.log('state',state.get("recommend"))
//     return { state: state.get("recommend") }
// }

// const mapActionToProps = dispatch => ({
//     getTopBanners: () => {
//         dispatch(getTopBannerAction())
//     }
// })
// export default connect(mapStateToProps, mapActionToProps)(memo(WXRecommend))