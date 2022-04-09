import { observer } from 'mobx-react'
import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import rootStore from '../../../stores/RootStore'
import ReactDOM from 'react-dom'
import BackgroundBlur from '../../../components/BackgroundBlur'
import ReleaseDateFilterButton from '../components/ReleaseDateFilterButton'
import { genreFilters, publisherFilters, releaseDateFilters } from '../../../entities/filters/Filters'
import GenreFilterButton from '../components/GenreFilterButton'
import PublisherFilterButton from '../components/PublisherFilterButton'


const FilterPopup: React.FC = () => {
    if (!rootStore.search.isFilterPopup) return null

    const handleClose = () => {
        rootStore.search.closeFilterPopup()
    }

    return ReactDOM.createPortal(
        <>
            <BackgroundBlur onClick={handleClose}/>
            <Paper
                elevation={3}
                sx={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    maxWidth: '70vw',
                    zIndex: 10,
                    px: 5,
                    py: 5,
                    overflow: 'scroll',
                    '&::-webkit-scrollbar': {
                        width: 0,
                        background: 'transparent',
                    },
                }}
            >
                <Stack spacing={3}>

                    <Stack
                        direction={'row'}
                        spacing={1}
                        alignItems={'center'}
                    >
                        <Typography
                            fontWeight={600}
                            fontSize={20}
                        >
                            Год издания:
                        </Typography>
                        {releaseDateFilters.map((releaseDate) => <ReleaseDateFilterButton releaseDateFilter={releaseDate}/>)}
                    </Stack>

                    <Stack
                        direction={'row'}
                        spacing={1}
                        alignItems={'center'}
                        sx={{
                            flexWrap: 'wrap',
                        }}
                    >
                        <Typography
                            fontWeight={600}
                            fontSize={20}
                        >
                            Жанры:
                        </Typography>
                        {genreFilters.map((genre) => <GenreFilterButton genreFilter={genre}/>)}
                    </Stack>


                    <Stack
                        direction={'row'}
                        spacing={1}
                        alignItems={'center'}
                    >
                        <Typography
                            fontWeight={600}
                            fontSize={20}
                        >
                            Издательство:
                        </Typography>
                        {publisherFilters.map((publisher) => <PublisherFilterButton publisherFilter={publisher}/>)}
                    </Stack>
                </Stack>
            </Paper>
        </>
        , document.getElementById('portal') as HTMLElement,
    )
}

export default observer(FilterPopup)