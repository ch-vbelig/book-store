import { useCallback } from 'react'
import rootStore from '../../../stores/RootStore'
import BookButton from '../../../components/button/BookButton'
import { Box, Typography } from '@mui/material'
import { observer } from 'mobx-react'
import { PublisherFilter } from '../../../entities/filters/Filters'


interface PublisherFilterButtonProps {
    publisherFilter: PublisherFilter
}


const PublisherFilterButton: React.FC<PublisherFilterButtonProps> = ({ publisherFilter }) => {

    const isAdded = publisherFilter.publisher == PublisherFilter.EITHER ?
        rootStore.search.selectedPublishers.length == 0
        : rootStore.search.publisherFilterAdded(publisherFilter)

    const handleClick = useCallback(() => {
        console.log(rootStore.search.selectedPublishers)
        console.log(rootStore.search.publisherFilterAdded(publisherFilter))
        if (!isAdded && publisherFilter.publisher == PublisherFilter.EITHER) {
            rootStore.search.emptyPublisherFilter()
            return
        }
        if (!isAdded) {
            rootStore.search.addPublisherFilter(publisherFilter)
        } else {
            rootStore.search.removePublisherFilter(publisherFilter)
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
                    {publisherFilter.name}
                </Typography>
            </BookButton>
        </Box>

    )
}

export default observer(PublisherFilterButton)