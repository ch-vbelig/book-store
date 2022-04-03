import { makeAutoObservable } from 'mobx'


// @ts-ignore
class UserStore {

    firstname = 'Belig'
    lastname = 'Chimitov'

    constructor() {
        makeAutoObservable(this)
    }

    // setUser(){
    //
    // }

}

export default UserStore
