import { Box, Divider, Grid, Stack, SvgIcon, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import { Book } from '../../../entities/Book'
import BookButton from '../../../components/button/BookButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import rootStore from '../../../stores/RootStore'
import { useState } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { observer } from 'mobx-react'


interface BookDescriptionGridProps {
    book: Book
}


const BookDescriptionGrid: React.FC<BookDescriptionGridProps> = ({ book }) => {

    const [isInCart, setIsInCart] = useState(rootStore.cart.contains(book))
    const [isFavorite, setIsFavorite] = useState(rootStore.favorite.contains(book))
    const isAuthorized = rootStore.auth.isAuthorized

    const handleAddToCart = () => {
        rootStore.cart.addBookToCart(book)
        setIsInCart(true)
    }

    const handleDeleteFromCart = () => {
        rootStore.cart.deleteFromCart(book)
        setIsInCart(false)
    }

    const handleAddToFavorite = () => {
        if (isAuthorized) {
            rootStore.favorite.addBookToFavorite(book)
            setIsFavorite(true)
        } else {
            rootStore.auth.openAuthPopup()
        }
    }

    const handleDeleteFromFavorite = () => {
        rootStore.favorite.deleteFromFavorite(book)
        setIsFavorite(false)
    }

    return (
        <Grid
            item
            xs={12}
            md={6}
        >
            <Stack direction={'row'} spacing={2}
                   justifyContent={'space-evenly'}
                   sx={{
                       mb: 2,
                   }}
            >
                <img
                    src={book.image}
                    style={{
                        height: 220,
                        width: 140,
                        maxHeight: '60vh',
                        maxWidth: '40vh',
                        objectFit: 'cover',
                        borderRadius: 16,
                    }}
                />

                <Stack sx={{
                    width: { xs: 320 },
                }}>
                    <Typography
                        // variant={'subtitle2'}
                        fontWeight={700}
                        fontSize={22}
                        fontFamily={'"Montserrat", sans-serif'}
                    >
                        {book?.name}
                    </Typography>

                    <Stack
                        direction={'row'}
                        alignItems={'start'}
                    >

                        <Typography
                            fontSize={16}
                            // fontWeight={500}
                        >
                            {book?.authors.join(', ')}
                        </Typography>

                        <Box sx={{
                            display: 'flex',
                            ml: 'auto',
                            alignItems: 'start',
                            flexDirection: 'row',
                        }}>
                            <SvgIcon fontSize={'medium'}>
                                <StarIcon/>

                            </SvgIcon>
                            <Typography
                                fontSize={16}
                                sx={{
                                    display: 'inline',
                                    width: 48,
                                }}
                            >
                                {book?.currentRating} / 5
                            </Typography>
                        </Box>
                    </Stack>

                    <Divider sx={{
                        m: 1,
                    }}/>

                    <Stack
                        direction={'row'}
                        justifyContent={'space-evenly'}
                    >
                        {!isFavorite ?
                            <BookButton
                                // variant={'outlined'}
                                onClick={handleAddToFavorite}
                            >
                                <Typography
                                    fontSize={16}
                                    fontWeight={500}
                                >
                                    В избранное
                                </Typography>

                            </BookButton>
                            :
                            <BookButton
                                variant={'outlined'}
                                onClick={handleDeleteFromFavorite}
                            >
                                <Typography
                                    fontSize={16}
                                    fontWeight={500}
                                >
                                    Сохранено
                                </Typography>
                            </BookButton>
                        }

                        {!isInCart ? <BookButton
                                onClick={handleAddToCart}
                            >
                                <Typography
                                    fontSize={16}
                                    fontWeight={500}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <ShoppingCartIcon/>
                                    {book?.price}р.
                                </Typography>

                            </BookButton>
                            :
                            <BookButton
                                variant={'outlined'}
                                onClick={handleDeleteFromCart}
                            >
                                <Typography
                                    fontSize={16}
                                    fontWeight={500}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <CheckCircleOutlineIcon/>
                                    В корзине
                                </Typography>

                            </BookButton>

                        }


                    </Stack>

                    <Box sx={{
                        // m: 1,
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                    }}>
                        <Stack spacing={2}>
                            <Box>
                                <Typography
                                    fontSize={16}
                                >
                                    Издательство:
                                </Typography>

                                <Typography
                                    fontSize={16}
                                >
                                    {book?.publisher}
                                </Typography>

                            </Box>

                            <Box>
                                <Typography
                                    fontSize={16}
                                >
                                    Год издательства:
                                </Typography>

                                <Typography
                                    fontSize={16}
                                >
                                    {book?.releaseDate}
                                </Typography>

                            </Box>

                            <Box>
                                <Typography
                                    fontSize={16}
                                >
                                    Формат книги:
                                </Typography>

                                <Typography
                                    fontSize={16}
                                >
                                    {book?.format}
                                </Typography>
                            </Box>


                        </Stack>
                        <Stack spacing={2}>
                            <Box>
                                <Typography
                                    fontSize={16}
                                >
                                    Страницы:
                                </Typography>

                                <Typography
                                    fontSize={16}
                                >
                                    {book?.pageNumber}
                                </Typography>
                            </Box>

                            <Box>
                                <Typography
                                    fontSize={16}
                                >
                                    Язык:
                                </Typography>

                                <Typography
                                    fontSize={16}
                                >
                                    {book?.language}
                                </Typography>
                            </Box>

                            <Box>
                                <Typography
                                    fontSize={16}
                                >
                                    Вес:
                                </Typography>

                                <Typography
                                    fontSize={16}
                                >
                                    {book?.weight}гр.
                                </Typography>
                            </Box>

                        </Stack>
                    </Box>
                </Stack>
            </Stack>

            <Stack direction={'row'} spacing={1}>
                <Typography
                    fontSize={16}
                    fontWeight={600}
                >
                    Жанры:
                </Typography>
                <Typography
                    fontSize={16}
                >
                    {book?.genres.join(', ')}
                </Typography>
            </Stack>

            <Typography
                fontSize={26}
                fontWeight={600}
                sx={{
                    mt: 2,
                }}
            >
                Описание
            </Typography>
            <Typography
                fontSize={16}
            >
                {book?.description}
            </Typography>

        </Grid>
    )
}

export default observer(BookDescriptionGrid)