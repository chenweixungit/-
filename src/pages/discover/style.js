import styled from 'styled-components'

export const RecommendWrapper = styled.div`
    
`


export const NaviBar = styled.div`
    height: 30px;
    background-color: #C20C0C;
    .nav-container{
        width: 1100px;
        margin: 0 auto;
    }
    .nav-content{
        top: 4px;
        position: relative;
        left: 165px;
        width: 500px;
        display: flex;
        justify-content: center;
        a{
            display: block;
            margin: 0 10px;
            padding: 0 10px;
            color: #fff;
            text-decoration: none;
            &:hover ,&.active{
                background-color:#9B0909;
                border-radius: 20px;
            }
        }
        
    }
`
