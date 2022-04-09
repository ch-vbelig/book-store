import AuthPopupStore from './pageStores/AuthPopupStore'
import ProfileStore from './pageStores/ProfileStore'
import LibraryStore from '../pages/aboutBook/LibraryStore'
import ReviewStore from './pageStores/ReviewStore'
import SearchStore from '../pages/search/SearchStore'
import CartStore from '../pages/cart/CartStore'
import FavoriteStore from '../pages/favorite/FavoriteStore'
import OrdersStore from '../pages/orders/OrdersStore'


export class RootStore {
    readonly auth = new AuthPopupStore()
    readonly user = new ProfileStore()
    readonly library = new LibraryStore()
    readonly reviews = new ReviewStore()
    readonly search = new SearchStore()
    readonly cart = new CartStore()
    readonly favorite = new FavoriteStore()
    readonly orders = new OrdersStore()
}

const rootStore= new RootStore()
export default rootStore