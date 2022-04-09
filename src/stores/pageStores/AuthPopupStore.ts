import { makeAutoObservable } from 'mobx'


class AuthPopupStore {

    isAuthorized = false
    isAuthPopup = false
    isRegisterPopup = false

    constructor() {
        makeAutoObservable(this)
    }

    authorize = (): void => {
        this.isAuthorized = true
        this.leaveAuthPopup()
    }

    logout = (): void => {
        this.isAuthorized = false
    }

    toAuthorize = (): void => {
        this.isAuthPopup = true
        this.isRegisterPopup = false
    }

    toRegister = (): void => {
        this.isAuthPopup = false
        this.isRegisterPopup = true
    }

    leaveAuthPopup = (): void => {
        this.isAuthPopup = false
        this.isRegisterPopup = false
    }


}

export default AuthPopupStore