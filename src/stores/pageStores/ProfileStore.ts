import { makeAutoObservable } from 'mobx'


// @ts-ignore
class ProfileStore {

    firstname = 'Belig'
    lastname = 'Chimitov'
    email = 'bbc7@tpu.ru'
    city = 'Tomsk'
    street = 'Vershinina St'
    house = '39A'
    addressIndex = '634034'

    constructor() {
        makeAutoObservable(this)
    }

    // setUser(){
    //
    // }

}

export default ProfileStore
