import React, { memo } from 'react'
import {renderRoutes} from 'react-router-config'

import { NaviBar ,RecommendWrapper} from './style'
import { discoverMenu } from "@/common/local-data"
import { NavLink } from 'react-router-dom'
export default memo(function index(props) {
    const { routes } = props.route
    console.log(routes)
    return (
        <RecommendWrapper>
            <NaviBar>
                <div className='nav-container'>
                    <div className='nav-content'>
                        {
                            discoverMenu.map((item) => {
                                return (
                                    <NavLink to={item.link} key={item.title}>
                                        {item.title}
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                </div>
            </NaviBar>
            {renderRoutes(routes)}
        </RecommendWrapper>
    )
})
