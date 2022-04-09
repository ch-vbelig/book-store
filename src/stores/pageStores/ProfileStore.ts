import { makeAutoObservable } from 'mobx'


// @ts-ignore
class ProfileStore {

    firstname = 'Belig'
    lastname = 'Chimitov'

    constructor() {
        makeAutoObservable(this)
    }

    // setUser(){
    //
    // }

}

export default ProfileStore
