import { makeAutoObservable } from 'mobx'
import Review from '../../entities/Review'


class ReviewStore {
    isReviewPopup = false

    reviews: Review[] = [
        {
            id: 1,
            bookId: 1,
            userName: 'Belig Chimitov',
            rating: 5,
            message: 'Really thrilling',
            date: new Date(),
            likes: 44,
        },
        {
            id: 2,
            bookId: 1,
            userName: 'Belig Chimitov',
            rating: 5,
            message: 'Really thrilling',
            date: new Date(),
            likes: 44,
        },
        {
            id: 3,
            bookId: 2,
            userName: 'Belig Chimitov',
            rating: 4,
            message: 'Really thrilling',
            date: new Date(),
            likes: 44,
        },
        {
            id: 4,
            bookId: 3,
            userName: 'Belig Chimitov',
            rating: 5,
            message: 'Really thrilling',
            date: new Date(),
            likes: 44,
        },

    ]

    constructor() {
        makeAutoObservable(this)
    }

    getBookReviews(bookId: number){
        return this.reviews.filter((review) => review.bookId == bookId)
    }

    openReviewPopup() {
        this.isReviewPopup = true
    }

    closeReviewPopup() {
        this.isReviewPopup = false
    }
}

export default ReviewStore