import { ReleaseDateFilter } from '../../../entities/filters/Filters'
import { useCallback } from 'react'
import rootStore from '../../../stores/RootStore'
import BookButton from '../../../components/button/BookButton'
import { Box, Typography } from '@mui/material'
import { observer } from 'mobx-react'


interface ReleaseDateFilterButtonProps {
    releaseDateFilter: ReleaseDateFilter
}


const ReleaseDateFilterButton: React.FC<ReleaseDateFilterButtonProps> = ({ releaseDateFilter }) => {

    const isAdded = releaseDateFilter.releaseDate < 0 ?
        rootStore.search.selectedReleaseDates.length == 0
        : rootStore.search.releaseDateFilterAdded(releaseDateFilter)

    const handleClick = useCallback(() => {
        if (!isAdded && releaseDateFilter.releaseDate < 0) {
            rootStore.search.emptyReleaseDateFilter()
            return
        }
        if (!isAdded) {
            rootStore.search.addReleaseDateFilter(releaseDateFilter)
        } else {
            rootStore.search.removeReleaseDateFilter(releaseDateFilter)
        }
        // setIsAdded(!isAdded)
    }, [isAdded])

    return (
        <Box >
            <BookButton
                variant={isAdded ? 'contained' : 'outlined'}
                onClick={handleClick}

            >
                <Typography>
                    {releaseDateFilter.name}
                </Typography>
            </BookButton>

        </Box>
    )
}

export default observer(ReleaseDateFilterButton)