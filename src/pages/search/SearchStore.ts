import { makeAutoObservable } from 'mobx'
import { GenreFilter, PublisherFilter, ReleaseDateFilter } from '../../entities/filters/Filters'


class SearchStore {
    isFilterPopup = false
    search  = ''
    selectedReleaseDates: ReleaseDateFilter[] = []
    selectedGenres: GenreFilter[] = []
    selectedPublishers: PublisherFilter[] = []


    constructor() {
        makeAutoObservable(this)
    }


    setSearch(search){
        this.search = search
    }

    //Genres

    addGenreFilter(genre: GenreFilter){
        this.selectedGenres.push(genre)
    }

    removeGenreFilter(genre: GenreFilter){
        this.selectedGenres.forEach((filter, index)=> {
            if (filter.id == genre.id) this.selectedGenres.splice(index, 1);
        })
    }

    emptyGenreFilter(){
        this.selectedGenres = []
    }

    genreFilterAdded(genre: GenreFilter){
        const filtered = this.selectedGenres.filter((genreFilter) => genreFilter.id == genre.id)
        return filtered.length > 0
    }

    // Release dates
    addReleaseDateFilter(date: ReleaseDateFilter){
        this.selectedReleaseDates.push(date)
    }

    removeReleaseDateFilter(releaseDateFilter: ReleaseDateFilter){
        this.selectedReleaseDates.forEach((filter, index)=> {
            if (filter.id == releaseDateFilter.id) this.selectedReleaseDates.splice(index, 1);
        })
    }

    emptyReleaseDateFilter(){
        this.selectedReleaseDates = []
    }

    releaseDateFilterAdded(releaseDate: ReleaseDateFilter){
        const filtered = this.selectedReleaseDates.filter((releaseDateFilter) => releaseDateFilter.id == releaseDate.id)
        return filtered.length > 0
    }

    // Publisher

    addPublisherFilter(publisher: PublisherFilter){
        this.selectedPublishers.push(publisher)
    }

    removePublisherFilter(publisher: PublisherFilter){
        this.selectedPublishers.forEach((filter, index)=> {
            if (filter.id == publisher.id) this.selectedPublishers.splice(index, 1);
        })
    }

    emptyPublisherFilter(){
        this.selectedPublishers = []
    }

    publisherFilterAdded(publisher: PublisherFilter){
        const filtered = this.selectedPublishers.filter((publisherFilter) => publisherFilter.id == publisher.id)
        return filtered.length > 0
    }

    openFilterPopup() {
        this.isFilterPopup = true
    }

    closeFilterPopup() {
        this.isFilterPopup = false
    }
}


export default SearchStore