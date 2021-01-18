import * as actionType from './constants'
import { Map } from 'immutable'

const defaultState = Map({
    currentSong: {}
})

const reducer = function (state = defaultState, action) {
    switch (action.type) {
        case actionType.CHANGE_CURRENT_SONG:
            return state.set("currentSong", action.currentSong)
        default:
            return state;
    }
}
export default reducer;