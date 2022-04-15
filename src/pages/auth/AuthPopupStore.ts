import { makeAutoObservable } from 'mobx'


class AuthPopupStore {
    isAuthorized = false
    isAuthPopup = false
    isRegisterPopup = false

    // login = ''
    // password = ''

    constructor() {
        makeAutoObservable(this)
    }

    authorize = (): void => {
        this.isAuthorized = true
        this.closeAuthPopup()
    }

    logout = (): void => {
        this.isAuthorized = false
    }

    openAuthPopup = (): void => {
        this.isAuthPopup = true
        this.isRegisterPopup = false
    }

    openRegisterPopup = (): void => {
        this.isAuthPopup = false
        this.isRegisterPopup = true
    }

    closeAuthPopup = (): void => {
        this.isAuthPopup = false
        this.isRegisterPopup = false
    }

    // setLogin = (login): void => {
    //     this.login = login
    // }
    //
    // setPassword = (password): void => {
    //     this.password = password
    // }
    //
    // resetCredentials = (): void => {
    //     this.login = ''
    //     this.password = ''
    // }
}

export default AuthPopupStore