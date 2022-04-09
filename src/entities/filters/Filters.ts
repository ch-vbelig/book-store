class ReleaseDateFilter {
    id: number
    name: string
    releaseDate: number
}

const releaseDateFilters: ReleaseDateFilter[] = [
    {
        id: 1,
        name: 'Любой',
        releaseDate: -1
    },
    {
        id: 2,
        name: '2020-е',
        releaseDate: 2020
    },
    {
        id: 3,
        name: '2010-е',
        releaseDate: 2010
    },
    {
        id: 4,
        name: 'Старше',
        releaseDate: 0
    },
]

class GenreFilter {
    static EITHER = 'either'
    id: number
    name: string
    genre: string
}


const genreFilters: GenreFilter[] = [
    {
        id: 1,
        name: 'Любой',
        genre: GenreFilter.EITHER
    },
    {
        id: 2,
        name: 'Альтернативная история',
        genre: 'alternative story'
    },
    {
        id: 3,
        name: 'Детские книги',
        genre: 'book for children'
    },
    {
        id: 4,
        name: 'Детективы',
        genre: 'detective'
    },
    {
        id: 5,
        name: 'Исторические романы',
        genre: 'historical novel'
    },
    {
        id: 6,
        name: 'Приключения',
        genre: 'adventure'
    },
    {
        id: 7,
        name: 'Научная фантастика',
        genre: 'science fiction'
    },
    {
        id: 8,
        name: 'Проза',
        genre: 'poetry'
    },
    {
        id: 9,
        name: 'Фэнтэзи',
        genre: 'fantasy'
    },

]


class PublisherFilter {
    static EITHER = 'either'
    id: number
    name: string
    publisher: string
}


const publisherFilters: PublisherFilter[] = [
    {
        id: 1,
        name: 'Любой',
        publisher: PublisherFilter.EITHER
    },
    {
        id: 2,
        name: 'ЛитРес',
        publisher: 'litres'
    },
    {
        id: 3,
        name: 'ЛитРес',
        publisher: 'litres'
    },
    {
        id: 4,
        name: 'ЛитРес',
        publisher: 'litres'
    },
    {
        id: 5,
        name: 'ЛитРес',
        publisher: 'litres'
    },
    {
        id: 6,
        name: 'ЛитРес',
        publisher: 'litres'
    },

]

export {ReleaseDateFilter, GenreFilter, PublisherFilter, releaseDateFilters, genreFilters, publisherFilters}