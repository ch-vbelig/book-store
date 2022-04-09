import { Book } from '../../entities/Book'
import { makeAutoObservable } from 'mobx'
import sherlockImage from '../../assets/images/sherlock.png'
import Comment from '../../entities/Comment'
import rootStore from '../../stores/RootStore'


class LibraryStore {
    books: Book[] = [
        new Book(
            {
                id: 1,
                name: 'Этюд в розовых тонах1',
                authors: ['Конан Дойл'],
                genres: ['Детективы', 'Криминал', 'Ужасы'],
                description: 'A Study in Scarlet is an 1887 detective novel written by Arthur Conan Doyle. The story marks the first appearance of Sherlock Holmes and Dr. Watson, who would become the most famous detective duo in literature. The book\'s title derives from a speech given by Holmes, a consulting detective, to his friend and chronicler Watson on the nature of his work, in which he describes the story\'s murder investigation as his "study in scarlet": "There\'s the scarlet thread of murder running through the colourless skein of life, and our duty is to unravel it, and isolate it, and expose every inch of it."\n',
                pageNumber: 120,
                releaseDate: 2001,
                publisher: 'Фор',
                language: 'Английский',
                image: sherlockImage,
                price: 980,
                weight: 640,
                currentRating: 4.9,
                format: '21 x 14 x 2.5',
                dateOfImport: new Date(),
                numOfBooks: 300,
            },
        ),
        new Book(
            {
                id: 2,
                name: 'Этюд в розовых тонах2',
                authors: ['Конан Дойл', 'Конан Дойл'],
                genres: ['Детективы', 'Криминал', 'Ужасы'],
                description: 'A Study in Scarlet is an 1887 detective novel written by Arthur Conan Doyle. The story marks the first appearance of Sherlock Holmes and Dr. Watson, who would become the most famous detective duo in literature. The book\'s title derives from a speech given by Holmes, a consulting detective, to his friend and chronicler Watson on the nature of his work, in which he describes the story\'s murder investigation as his "study in scarlet": "There\'s the scarlet thread of murder running through the colourless skein of life, and our duty is to unravel it, and isolate it, and expose every inch of it."\n',
                pageNumber: 120,
                releaseDate: 2001,
                publisher: 'Фор',
                language: 'Английский',
                image: sherlockImage,
                price: 980,
                weight: 640,
                currentRating: 4.9,
                format: '21 x 14 x 2.5',
                dateOfImport: new Date(),
                numOfBooks: 300,
            },
        ),
        new Book(
            {
                id: 3,
                name: 'Этюд в розовых тонах3',
                authors: ['Конан Дойл', 'Конан Дойл', 'Конан Дойл', 'Конан Дойл'],
                genres: ['Детективы', 'Криминал', 'Ужасы'],
                description: 'A Study in Scarlet is an 1887 detective novel written by Arthur Conan Doyle. The story marks the first appearance of Sherlock Holmes and Dr. Watson, who would become the most famous detective duo in literature. The book\'s title derives from a speech given by Holmes, a consulting detective, to his friend and chronicler Watson on the nature of his work, in which he describes the story\'s murder investigation as his "study in scarlet": "There\'s the scarlet thread of murder running through the colourless skein of life, and our duty is to unravel it, and isolate it, and expose every inch of it."\n',
                pageNumber: 120,
                releaseDate: 2001,
                publisher: 'Фор',
                language: 'Английский',
                image: sherlockImage,
                price: 980,
                weight: 640,
                currentRating: 4.9,
                format: '21 x 14 x 2.5',
                dateOfImport: new Date(),
                numOfBooks: 300,
            },
        ),
        new Book(
            {
                id: 4,
                name: 'Этюд в розовых тонах4',
                authors: ['Конан Дойл', 'Конан Дойл'],
                genres: ['Детективы', 'Криминал', 'Ужасы'],
                description: 'A Study in Scarlet is an 1887 detective novel written by Arthur Conan Doyle. The story marks the first appearance of Sherlock Holmes and Dr. Watson, who would become the most famous detective duo in literature. The book\'s title derives from a speech given by Holmes, a consulting detective, to his friend and chronicler Watson on the nature of his work, in which he describes the story\'s murder investigation as his "study in scarlet": "There\'s the scarlet thread of murder running through the colourless skein of life, and our duty is to unravel it, and isolate it, and expose every inch of it."\n',
                pageNumber: 120,
                releaseDate: 2001,
                publisher: 'Фор',
                language: 'Английский',
                image: sherlockImage,
                price: 980,
                weight: 640,
                currentRating: 4.9,
                format: '21 x 14 x 2.5',
                dateOfImport: new Date(),
                numOfBooks: 300,
            },
        ),
        new Book(
            {
                id: 5,
                name: 'Этюд в розовых тонах5',
                authors: ['Конан Дойл', 'Конан Дойл'],
                genres: ['Детективы', 'Криминал', 'Ужасы'],
                description: 'A Study in Scarlet is an 1887 detective novel written by Arthur Conan Doyle. The story marks the first appearance of Sherlock Holmes and Dr. Watson, who would become the most famous detective duo in literature. The book\'s title derives from a speech given by Holmes, a consulting detective, to his friend and chronicler Watson on the nature of his work, in which he describes the story\'s murder investigation as his "study in scarlet": "There\'s the scarlet thread of murder running through the colourless skein of life, and our duty is to unravel it, and isolate it, and expose every inch of it."\n',
                pageNumber: 120,
                releaseDate: 2001,
                publisher: 'Фор',
                language: 'Английский',
                image: sherlockImage,
                price: 980,
                weight: 640,
                currentRating: 4.9,
                format: '21 x 14 x 2.5',
                dateOfImport: new Date(),
                numOfBooks: 300,
            },
        ),
        new Book(
            {
                id: 6,
                name: 'Этюд в розовых тонах6',
                authors: ['Конан Дойл', 'Конан Дойл'],
                genres: ['Детективы', 'Криминал', 'Ужасы'],
                description: 'A Study in Scarlet is an 1887 detective novel written by Arthur Conan Doyle. The story marks the first appearance of Sherlock Holmes and Dr. Watson, who would become the most famous detective duo in literature. The book\'s title derives from a speech given by Holmes, a consulting detective, to his friend and chronicler Watson on the nature of his work, in which he describes the story\'s murder investigation as his "study in scarlet": "There\'s the scarlet thread of murder running through the colourless skein of life, and our duty is to unravel it, and isolate it, and expose every inch of it."\n',
                pageNumber: 120,
                releaseDate: 2001,
                publisher: 'Фор',
                language: 'Английский',
                image: sherlockImage,
                price: 980,
                weight: 640,
                currentRating: 4.9,
                format: '21 x 14 x 2.5',
                dateOfImport: new Date(),
                numOfBooks: 300,
            },
        ),
        new Book(
            {
                id: 7,
                name: 'Этюд в розовых тонах7',
                authors: ['Конан Дойл', 'Конан Дойл'],
                genres: ['Детективы', 'Криминал', 'Ужасы'],
                description: 'A Study in Scarlet is an 1887 detective novel written by Arthur Conan Doyle. The story marks the first appearance of Sherlock Holmes and Dr. Watson, who would become the most famous detective duo in literature. The book\'s title derives from a speech given by Holmes, a consulting detective, to his friend and chronicler Watson on the nature of his work, in which he describes the story\'s murder investigation as his "study in scarlet": "There\'s the scarlet thread of murder running through the colourless skein of life, and our duty is to unravel it, and isolate it, and expose every inch of it."\n',
                pageNumber: 120,
                releaseDate: 2001,
                publisher: 'Фор',
                language: 'Английский',
                image: sherlockImage,
                price: 980,
                weight: 640,
                currentRating: 4.9,
                format: '21 x 14 x 2.5',
                dateOfImport: new Date(),
                numOfBooks: 300,
            },
        ),
        new Book(
            {
                id: 8,
                name: 'Этюд в розовых тонах8',
                authors: ['Конан Дойл', 'Конан Дойл'],
                genres: ['Детективы', 'Криминал', 'Ужасы'],
                description: 'A Study in Scarlet is an 1887 detective novel written by Arthur Conan Doyle. The story marks the first appearance of Sherlock Holmes and Dr. Watson, who would become the most famous detective duo in literature. The book\'s title derives from a speech given by Holmes, a consulting detective, to his friend and chronicler Watson on the nature of his work, in which he describes the story\'s murder investigation as his "study in scarlet": "There\'s the scarlet thread of murder running through the colourless skein of life, and our duty is to unravel it, and isolate it, and expose every inch of it."\n',
                pageNumber: 120,
                releaseDate: 2001,
                publisher: 'Фор',
                language: 'Английский',
                image: sherlockImage,
                price: 980,
                weight: 640,
                currentRating: 4.9,
                format: '21 x 14 x 2.5',
                dateOfImport: new Date(),
                numOfBooks: 300,

            },
        ),
        new Book(
            {
                id: 9,
                name: 'Этюд в розовых тонах9',
                authors: ['Конан Дойл', 'Конан Дойл'],
                genres: ['Детективы', 'Криминал', 'Ужасы'],
                description: 'A Study in Scarlet is an 1887 detective novel written by Arthur Conan Doyle. The story marks the first appearance of Sherlock Holmes and Dr. Watson, who would become the most famous detective duo in literature. The book\'s title derives from a speech given by Holmes, a consulting detective, to his friend and chronicler Watson on the nature of his work, in which he describes the story\'s murder investigation as his "study in scarlet": "There\'s the scarlet thread of murder running through the colourless skein of life, and our duty is to unravel it, and isolate it, and expose every inch of it."\n',
                pageNumber: 120,
                publisher: 'Фор',
                releaseDate: 2001,
                language: 'Английский',
                image: sherlockImage,
                price: 980,
                weight: 640,
                currentRating: 4.9,
                format: '21 x 14 x 2.5',
                dateOfImport: new Date(),
                numOfBooks: 300,
            },
        ),
    ]
    chosenBook: Book
    comments: Comment[] = [
        {
            id: 1,
            userId: 1,
            reviewId: 1,
            userName: 'Belig Chimitov',
            message: 'Cool',
            date: new Date()
        },
        {
            id: 2,
            userId: 2,
            reviewId: 1,
            userName: 'Kuzco Roman',
            message: 'Cool',
            date: new Date()
        },
        {
            id: 3,
            userId: 1,
            reviewId: 1,
            userName: 'Belig Chimitov',
            message: 'Cool',
            date: new Date()
        }
    ]

    constructor() {
        makeAutoObservable(this)
    }

    setBooks(books: Book[]) {
        this.books = books
    }

    setBook(book: Book) {
        this.chosenBook = book
    }

    addComment(reviewId, message){
        const comment = new Comment()
        comment.id = this.comments.length
        comment.reviewId = reviewId
        comment.message = message
        comment.userName = rootStore.user.firstname + rootStore.user.lastname
        comment.date = new Date()
        comment.userId = 1
        this.comments.push(comment)
    }

}


export default LibraryStore