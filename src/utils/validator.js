import * as _ from 'lodash'


export function loginValidator(userData) {

    let errors = {}

    if (userData.identify === '') {
        errors.identify = '该字段不能为空'
    }

    if (userData.password === '') {
        errors.password = '该字段不能为空'
    }


    return {
        isValid : Object.keys(errors).length === 0,
        errors
    }

}


export function signUpValidator(userData) {


    let errors = {}

    if (userData.username === '') {
        errors.username = '该字段不能为空'
    }

    if (userData.email === '') {
        errors.email = '该字段不能为空'
    }

    if (userData.password === '') {
        errors.password = '该字段不能为空'
    }

    if (userData.confirmPassword === '') {
        errors.confirmPassword = '该字段不能为空'
    }

    if (userData.confirmPassword !== '' && userData.password !== userData.confirmPassword) {
        errors.confirmPassword = '确认密码和密码不一致'
    }

    return {
        isValid : Object.keys(errors).length === 0,
        errors
    }

}


export function createMovieValidator(movieData) {
    let errors = {}


    if (movieData.title === '') {
        errors.title = '电影名称不能为空'
    }

    // if (!_.isDate(movieData.pubdate)) {
    //     errors.pubdate = '电影上映时间格式不正确'
    // }


    if (movieData.summary === '') {
        errors.summary = '电影简介不能为空'
    }


    return {
        errors,
        isValid : Object.keys(errors).length === 0
    }
}