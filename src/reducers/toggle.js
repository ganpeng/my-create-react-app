import {
    TOGGLE_SIDEBAR,
    TOGGLE_INFO_PROMPT
} from '../constants'


const initialState = {
    sideBar : false,
    infoPrompt : false
}



export default function toggle(state = initialState, action = {}) {
    switch(action.type) {
        case TOGGLE_SIDEBAR : {
            return Object.assign({}, state, { sideBar : !state.sideBar})
        }

        case TOGGLE_INFO_PROMPT : {
            return Object.assign({}, state, { infoPrompt : !state.infoPrompt })
        }

        default : {
            return state
        }
    }
}