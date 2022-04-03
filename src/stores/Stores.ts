import AuthPopupStore from './lowLevelStores/AuthPopupStore'
import UserStore from './lowLevelStores/UserStore'


export class RootStore {
    readonly auth = new AuthPopupStore()
    readonly user = new UserStore()
}

const stores = new RootStore()
export default stores