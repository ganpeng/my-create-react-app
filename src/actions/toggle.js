import {
    TOGGLE_SIDEBAR,
    TOGGLE_INFO_PROMPT
} from '../constants'


export function toggleSideBar() {
    return {
        type : TOGGLE_SIDEBAR
    }
}


export function toggleInfoPrompt() {
    return {
        type : TOGGLE_INFO_PROMPT
    }
}


