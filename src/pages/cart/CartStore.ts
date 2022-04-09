import { Book } from '../../entities/Book'
import { makeAutoObservable } from 'mobx'
import BookOrder from '../../entities/BookOrder'
import DeliverOrder from '../../entities/DeliverOrder'
import rootStore from '../../stores/RootStore'


class CartStore{
    cart: BookOrder[] = []
    isAuthPopup = false
    isOrderPopup = false
    totalPrice = 0
    numOfBooks = 0
    addressIndex = ''
    city = ''
    street = ''
    house = ''


    constructor() {
        makeAutoObservable(this)
    }

    openAuthPopup(){
        this.isAuthPopup = true
    }

    closeAuthPopup(){
        this.isAuthPopup = false
    }

    openOrderPopup(){
        this.isOrderPopup = true
    }

    closeOrderPopup(){
        this.isOrderPopup = false
    }

    addBookToCart(book: Book) {
        const bookOrder = new BookOrder()
        bookOrder.book = book
        bookOrder.number = 1
        this.numOfBooks ++
        this.cart.push(bookOrder)
        this.totalPrice += book.price
    }

    addBookOrder(book: Book) {
        this.cart.forEach((bookOrder,index)=>{
            if(bookOrder.book.id == book.id) {
                bookOrder.number ++
                this.numOfBooks ++
                this.totalPrice += book.price
            }
        })
    }

    removeBookOrder(book: Book) {
        this.cart.forEach((bookOrder,index)=>{
            if(bookOrder.book.id == book.id) {
                bookOrder.number --
                this.numOfBooks --
                this.totalPrice -= book.price
            }
        })
    }

    deleteFromCart(bookToDelete: Book) {
        this.cart.forEach((bookOrder,index)=>{
            if(bookOrder.book == bookToDelete) {
                this.cart.splice(index,1)
                this.numOfBooks -= bookOrder.number
                this.totalPrice -= bookToDelete.price * bookOrder.number
            }
        })
    }

    contains(book: Book) {
        const filtered = this.cart.filter((bookOrder) => bookOrder.book == book)
        return filtered.length > 0
    }


    setIndex(index){
        this.addressIndex = index
    }

    setCity(city){
        this.city = city
    }

    setStreet(street){
        this.street = street
    }

    setHouse(house){
        this.house = house
    }

    makeOrder(){
        const order = new DeliverOrder()
        order.bookOrders = this.cart
        order.totalSum = this.totalPrice
        order.numObBooks = this.numOfBooks
        order.addressIndex = this.addressIndex
        order.city = this.city
        order.street = this.street
        order.house = this.house
        order.status = DeliverOrder.CREATED
        order.date = new Date()
        rootStore.orders.addDeliverOrder(order)
        this.reset()
    }

    reset(){
        this.cart = []
        this.totalPrice = 0
        this.numOfBooks = 0
        this.addressIndex = ''
        this.city = ''
        this.street = ''
        this.house = ''
    }
}

export default CartStore