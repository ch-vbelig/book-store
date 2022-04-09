export class Book{
    id: number
    name: string
    authors: string[]
    genres: string[]
    description: string
    pageNumber: number
    releaseDate: number
    publisher: string
    language: string
    image: string
    price: number
    weight: number
    format: string
    dateOfImport: Date
    numOfBooks: number
    currentRating: number

    constructor({
                    id,
                    name,
                    authors,
                    genres,
                    description,
                    pageNumber,
                    releaseDate,
                    publisher,
                    language,
                    image,
                    price,
                    weight,
                    format,
                    dateOfImport,
                    numOfBooks,
                    currentRating,
                }) {

            this.id = id
            this.name = name
            this.authors = authors
            this.genres = genres
            this.description = description
            this.pageNumber = pageNumber
            this.releaseDate = releaseDate
            this.publisher = publisher
            this.language = language
            this.image = image
            this.price = price
            this.weight = weight
            this.format = format
            this.dateOfImport = dateOfImport
            this.numOfBooks = numOfBooks
            this.currentRating = currentRating

    }

    public get bookKeyWords() {
        return [this.name,
            this.authors.join(' '),
            this.genres.join(' '),
            this.releaseDate,
            this.publisher,
            this.language,
        ].join(' ').toLowerCase()
    }
}