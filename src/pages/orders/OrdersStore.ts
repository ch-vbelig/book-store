import { makeAutoObservable } from 'mobx'
import DeliverOrder from '../../entities/DeliverOrder'


class OrdersStore {
    orders: DeliverOrder[] = []

    constructor() {
        makeAutoObservable(this)
    }


    addDeliverOrder(order){
        this.orders.push(order)
    }

    emptyDeliverOrders () {
        this.orders = []
    }

}


export default OrdersStore