import { useCallback } from 'react'
import rootStore from '../../../stores/RootStore'
import BookButton from '../../../components/button/BookButton'
import { Box, Typography } from '@mui/material'
import { observer } from 'mobx-react'
import { GenreFilter } from '../../../entities/filters/Filters'


interface GenreFilterButtonProps {
    genreFilter: GenreFilter
}


const GenreFilterButton: React.FC<GenreFilterButtonProps> = ({ genreFilter }) => {

    const isAdded = genreFilter.genre == GenreFilter.EITHER ?
        rootStore.search.selectedGenres.length == 0
        : rootStore.search.genreFilterAdded(genreFilter)

    const handleClick = useCallback(() => {
        console.log(rootStore.search.selectedGenres)
        console.log(rootStore.search.genreFilterAdded(genreFilter))
        if (!isAdded && genreFilter.genre == GenreFilter.EITHER) {
            rootStore.search.emptyGenreFilter()
            return
        }
        if (!isAdded) {
            rootStore.search.addGenreFilter(genreFilter)
        } else {
            rootStore.search.removeGenreFilter(genreFilter)
        }
    }, [isAdded])

    return (
        <Box >
            <BookButton
                variant={isAdded ? 'contained' : 'outlined'}
                onClick={handleClick}
                sx={{
                    my: 1,
                }}
            >
                <Typography>
                    {genreFilter.name}
                </Typography>
            </BookButton>
        </Box>

    )
}

export default observer(GenreFilterButton)