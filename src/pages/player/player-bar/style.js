import styled from 'styled-components'


export const PlayerBarWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 52px;
    background-position: 0 0;
    background-repeat: repeat;
    .bar-content{
        margin-top: 2px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left{
            display: flex;
            align-items: center;
            .control{
                display: flex;
                justify-content: center;
                .prev{
                    margin-top: 12px;
                    width: 28px;
                    height: 28px;
                    background-position: 0 -130px;
                }
                .next{
                    margin-top: 12px;
                    width: 28px;
                    height: 28px;
                    background-position: -80px -130px;
                }
                .player{
                    margin: 8px 5px;
                    width: 36px;
                    height: 36px;
                    background-position: 0 ${props => props.isPlaying ? "-165px" : "-204px"};
                }
            }
        }
        .info{
            margin-left: 30px;
            display: flex;
            .image{
                position: relative;
                top: 8px;
                background-color:white;
                width: 34px;
                height: 34px;
                border-radius: 5px;
            }
            .info-box{
                display: flex;
                flex-direction: column;
                margin-left: 5px;
                .song-info{
                    position: relative;
                    top: 6px;
                    margin-left: 15px;
                    .song-name{
                        color: #fff;
                        font-size: 12px;
                    }
                    .song-author{
                        color: #ccc;
                        font-size: 10px;
                        margin-left: 15px;
                    }
                }
                .song-progress{
                    display: flex;
                    align-items: center;

                    .ant-slider {
                        width: 493px;
                        margin-right: 10px;

                        .ant-slider-rail {
                        height: 9px;
                        background: url(${require("@/assets/img/progress_bar.png")}) right 0;
                        }

                        .ant-slider-track {
                        height: 9px;
                        background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
                        }

                        .ant-slider-handle {
                        width: 22px;
                        height: 24px;
                        border: none;
                        margin-top: -7px;
                        background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
                        }
                    }

                    .time {
                        .now-time {
                            color: #e1e1e1;
                        }
                        .divider {
                            margin: 0 3px;
                            color: #e1e1e1;
                        }
                        .duration {
                            color: #e1e1e1;
                        }
                    }
                }
            }
        }
    }
`
export const Operator = styled.div`
    display: flex;
    position: relative;
    top: 3px;
    .btn{
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
    .favor {
        background-position: -88px -163px;
        &:hover{
            background-position: -88px -188px;
        }
    }

    .share {
        background-position: -114px -163px;
        &:hover{
            background-position: -114px -189px;
        }
    }
    .volume {
        background-position: -2px -248px;
        &:hover{
            background-position: -32px -248px;
        }
    }

    .loop {
      background-position: ${props => {
        switch(props.sequence) {
          case 1:
            return "-66px -248px"
          case 2:
            return "-66px -344px"
          default:
            return "-3px -344px"
        }
      }};
    }

    .playlist {
      width: 59px;
      background-position: -42px -68px;
      &:hover{
            background-position: -42px -99px;
        }
    }
`
