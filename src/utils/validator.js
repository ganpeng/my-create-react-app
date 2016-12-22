

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