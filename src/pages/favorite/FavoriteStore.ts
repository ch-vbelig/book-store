import { makeAutoObservable } from 'mobx'
import { Book } from '../../entities/Book'


class FavoriteStore{
    favorites: Book[] = []
    favoritesToDelete: Book[] = []

    constructor() {
        makeAutoObservable(this)
    }

    addBookToFavorite(book: Book) {
        this.favorites.push(book)
    }

    deleteFromFavorite(bookToDelete: Book) {
        this.favorites.forEach((fBook,index)=>{
            if(fBook.id == bookToDelete.id) {
                this.favorites.splice(index,1)
            }
        })
    }

    contains(book: Book) {
        const filtered = this.favorites.filter((fBook) => fBook.id == book.id)
        return filtered.length > 0
    }


    addBookToDelete(book){
        this.favoritesToDelete.push(book)
    }

    returnBookToDelete(bookToDelete){
        this.favoritesToDelete.forEach((fBook,index)=>{
            if(fBook.id == bookToDelete.id) {
                this.favoritesToDelete.splice(index,1)
            }
        })
    }

    saveChanges(){
        this.favoritesToDelete.forEach((fBookToDelete,index)=>{
            const indexToDelete = this.favorites.findIndex((fBook, index) => fBook.id == fBookToDelete.id)
            if (indexToDelete >= 0){
                this.favorites.splice(indexToDelete,1)
            }
        })
        this.favoritesToDelete = []
    }

}

export default FavoriteStore