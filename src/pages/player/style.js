import styled from "styled-components";

export const PlayerWrapper = styled.div`
    .content{
        background: url(${require("@/assets/img/wrap-bg.png")}) repeat-y;
        background-color: #fff; 
        display: flex;
    }
` 
export const PlayerLeft = styled.div`
    width: 710px;
    .player-info{
        display: flex;
        .player-img{
            margin-top: 38px;
            margin-left: 34px;
            margin-right: 30px;
            width:198px;
            height:198px;
            background-position: -144px -584px;
            text-align:center;
            img{
                margin-top: 34px;
                border-radius: 65px;
            }
        }
        .song-detail{
            width: 414px;
            margin-top: 38px;
            
            .song-name-container{
                display: flex;
                align-items: center;
                .name-icon{
                    width: 54px;
                    height: 24px;
                    background-position: 0 -463px;
                }
                .song-name{
                    margin-left: 10px;
                    span{
                        display: table-cell;
                        vertical-align: middle;
                        margin-bottom: 4px;
                        margin-left:4px;
                        font-size:24px;
                    }
                }
            }
        }
    }
`

export const PlayerRight = styled.div`
    width: 270px;
    padding: 20px 40px 40px 30px;
`