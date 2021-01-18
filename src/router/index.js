import React from 'react'
import { Redirect } from "react-router-dom"

import WXDiscover from "@/pages/discover"
import WXFriend from "@/pages/friend"
import WXMine from "@/pages/mine"
import Album from "@/pages/discover/c-pages/albums"
import Artist from "@/pages/discover/c-pages/artists"
import Djradio from "@/pages/discover/c-pages/djradio"
import Ranking from "@/pages/discover/c-pages/ranking"
import Recommend from "@/pages/discover/c-pages/recommend"
import Song from "@/pages/discover/c-pages/songs"
import Player from "@/pages/player"

const routes = [
    {
        path:'/',
        exact: true,
        render: ()=>{
            return <Redirect to="/discover"></Redirect>
        }
    },
    {
        path:'/discover',
        component:WXDiscover,
        routes:[
            {
                path: '/discover',
                exact:true,
                render: ()=>{
                    return <Redirect to="/discover/recommend"/>
                }
            },
            {
                path: '/discover/album',
                component: Album
            },
            {
                path: '/discover/artist',
                component: Artist
            },
            {
                path: '/discover/djradio',
                component: Djradio
            },
            {
                path: '/discover/ranking',
                component: Ranking
            },
            {
                path: '/discover/recommend',
                component: Recommend
            },
            {
                path: '/discover/songs',
                component: Song
            },
            {
                path: '/discover/player',
                component: Player
            },
        ]
    },
    {
        path:'/mine',
        component:WXMine
    },
    {
        path:'/friend',
        component:WXFriend
    },
]
export default routes;