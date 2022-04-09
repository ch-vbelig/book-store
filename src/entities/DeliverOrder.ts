import BookOrder from './BookOrder'


class DeliverOrder {
    static CREATED = 0
    static BEING_DELIVERED = 1
    static DELIVERED = 1

    bookOrders: BookOrder[]
    numObBooks: number
    totalSum: number
    date: Date
    status: number
    addressIndex = ''
    city = ''
    street = ''
    house = ''
}

export default DeliverOrder