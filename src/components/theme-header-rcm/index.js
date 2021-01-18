import PropTypes from 'prop-types'
import React, { memo } from 'react'

import {HeaderWrapper} from './style'


const WXThemeHeaderRCM = memo(function(props) {
    const {title, keywords} = props;

    return (
        <HeaderWrapper className="sprite_02">
            <div className="left">
                <h3 className="title">{title}</h3>
                <div className="keyword">
                    {
                        keywords.map((item,index)=>{
                            return (
                                <div key={item} className="item">
                                    <a  href="todo">{item}</a>
                                    {index !== (keywords.length - 1) && <span className="divider">|</span>}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='right'>
                <a href="todo">更多</a>
                <i className="icon sprite_02"></i>
            </div>
        </HeaderWrapper>
    )
})

WXThemeHeaderRCM.propTypes = {
    title: PropTypes.string.isRequired,
    keywords: PropTypes.array
}
WXThemeHeaderRCM.defaultProps = {
    keywords: []
}

export default WXThemeHeaderRCM;