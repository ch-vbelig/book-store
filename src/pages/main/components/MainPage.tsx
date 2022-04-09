import { Stack, Typography } from '@mui/material'
import BookSlider from '../../../components/bookElements/BookSlider'
import rootStore from '../../../stores/RootStore'
import BookCover from './BookCover'
import React from 'react'
import { observer } from 'mobx-react'


const MainPage: React.FC = () => {
    return (
        <Stack
            sx={{
                py: 3,
            }}
        >
            <Typography variant={'h6'}
                        fontWeight={600}
                        fontSize={26}
                        fontFamily={'"Montserrat", sans-serif'}
                        sx={{
                            ml: 4,
                        }}
            >
                Новинки
            </Typography>
            <BookSlider variant="scrollable"
                        scrollButtons
                // value={0}
                // allowScrollButtonsMobile
            >
                {rootStore.library.books.map((book, index) => (<BookCover book={book}/>))}
            </BookSlider>

            <Typography variant={'h6'}
                        fontWeight={600}
                        fontSize={26}
                        fontFamily={'"Montserrat", sans-serif'}
                        sx={{
                            ml: 4,
                        }}
            >
                Детективы
            </Typography>
            <BookSlider variant="scrollable"
                        scrollButtons
                // allowScrollButtonsMobile
            >
                {rootStore.library.books.map((book, index) => (<BookCover book={book}/>))}
            </BookSlider>

            <Typography variant={'h6'}
                        fontWeight={600}
                        fontSize={26}
                        fontFamily={'"Montserrat", sans-serif'}
                        sx={{
                            ml: 4,
                        }}
            >
                Криминал
            </Typography>


            <BookSlider variant="scrollable"
                        scrollButtons
                // allowScrollButtonsMobile
            >
                {rootStore.library.books.map((book, index) => (<BookCover book={book}/>))}
            </BookSlider>
        </Stack>
    )
}


export default observer(MainPage)