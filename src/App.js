import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import routes from './router'
import store from '@/store'
import WXAppHeader from 'components/app-header'
import WXAppFooter from 'components/app-footer'
import WXPlayerBar from '@/pages/player/player-bar'

export default memo(function App() {
    
    return (
        //header和footer是固定显示出来的，只有中间的那部分是通过router来控制
        <Provider store={store}>
            <HashRouter>
                <WXAppHeader></WXAppHeader>
                    {renderRoutes(routes)}
                <WXAppFooter></WXAppFooter>
                <WXPlayerBar></WXPlayerBar>
            </HashRouter> 
        </Provider>
    )
})
