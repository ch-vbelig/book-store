import { observer } from 'mobx-react'
import { Box, Divider, Stack, SvgIcon, Typography } from '@mui/material'
import rootStore from '../../stores/RootStore'
import StarIcon from '@mui/icons-material/Star'
import FavoriteBookItem from './components/FavoriteBookItem'
import BookButton from '../../components/button/BookButton'
import React from 'react'


const Favorite: React.FC = () => {
    const favorites = rootStore.favorite.favorites
    const isAuthorized = rootStore.auth.isAuthorized

    const handleSaveChanges = () => {
        rootStore.favorite.saveChanges()
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
                    Избранное
                </Typography>

                <SvgIcon fontSize={'large'} htmlColor={'black'}>
                    <StarIcon/>
                </SvgIcon>
            </Stack>
            <Divider/>

            {
                favorites.length > 0 ?
                    favorites.map((book) => <FavoriteBookItem book={book}/>)
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

            {
                rootStore.favorite.favoritesToDelete.length > 0 &&
                <BookButton
                    onClick={handleSaveChanges}
                    sx={{
                        mt: 2,
                        alignSelf:'end'
                    }}
                >
                    <Typography
                        fontSize={16}
                        fontWeight={500}
                    >
                        Сохранить
                    </Typography>
                </BookButton>
            }
        </Stack>
    )
}

export default observer(Favorite)
