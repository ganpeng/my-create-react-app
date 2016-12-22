import { getToken } from './storage'

const token = getToken()

export default function setHeader() {
    if (token) {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization' : `Bear ${token}`
        }
    } else {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }
}