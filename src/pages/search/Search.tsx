import React from 'react'
import { Box, Divider, IconButton, Stack, SvgIcon, Typography } from '@mui/material'
import rootStore from '../../stores/RootStore'
import BookItem from './components/BookItem'
import { observer } from 'mobx-react'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'


const Search: React.FC = () => {
    const search = rootStore.search.search
    const filteredBooks = rootStore.library.books.filter((book) => book.bookKeyWords.includes(search.toLowerCase()))

    const handleOpenFilter = () => {
        rootStore.search.openFilterPopup()
    }

    return (
        <Stack
            sx={{
                px: 6,
                py: 3,
            }}
        >
            <Stack
                direction={'row'}
                alignItems={'center'}
                spacing={1}
            >

                <Typography variant={'h6'}
                            fontWeight={600}
                            fontSize={26}
                            fontFamily={'"Montserrat", sans-serif'}
                >
                    Результаты поиска
                </Typography>

                <IconButton
                    onClick={handleOpenFilter}
                >
                    <SvgIcon fontSize={'large'} htmlColor={'black'}>
                        <FilterAltOutlinedIcon/>
                    </SvgIcon>
                </IconButton>
            </Stack>
            <Divider/>

            {
                filteredBooks.length > 0 ?
                    filteredBooks.map((book) => <BookItem book={book}/>)
                    :
                    <Box
                        sx={{
                            height: '80vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography>
                            <Box
                                color={'#A4A4A4'}
                                fontWeight={600}
                                fontSize={36}
                                sx={{ textAlign: 'center', m: 1 }}
                            >
                                Нет результатов
                            </Box>
                        </Typography>
                    </Box>
            }
        </Stack>
    )
}

export default observer(Search)