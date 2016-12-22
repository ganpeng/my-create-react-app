
import { SET_USER } from '../constants'


const initialState = {
    isAuthentication : false,
    user : {} 
}


export default function auth(state = initialState, action = {}) {
    switch(action.type) {
        case SET_USER : {
            return Object.assign({}, state, {
                isAuthentication : Object.keys(action.user).length !== 0,
                user : action.user
            })
        }

        default : {
            return state
        }
    }
}
