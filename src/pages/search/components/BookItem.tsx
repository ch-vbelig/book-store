import { Divider, Stack, Typography } from '@mui/material'
import { Book } from '../../../entities/Book'
import { useNavigate } from 'react-router-dom'
import rootStore from '../../../stores/RootStore'
import { Pages } from '../../../constants/pages'
import { observer } from 'mobx-react'
import StarIcon from '@mui/icons-material/Star'
import React, { useState } from 'react'
import BookButton from '../../../components/button/BookButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'


interface BookItemProps {
    book: Book
}


const BookItem: React.FC<BookItemProps> = ({ book }) => {
    const [isInCart, setIsInCart] = useState(rootStore.cart.contains(book))
    const navigate = useNavigate()

    const stars = Array.from({ length: Math.round(book.currentRating) }, (_, i) => <StarIcon/>)

    const handleChooseBook = () => {
        rootStore.library.setBook(book)
        navigate(Pages.ABOUT_BOOK)
    }

    const handleAddToCart = () => {
        rootStore.cart.addBookToCart(book)
        setIsInCart(true)
    }

    const handleDeleteFromCart = () => {
        rootStore.cart.deleteFromCart(book)
        setIsInCart(false)
    }

    return (
        <Stack>

            <Stack
                direction={'row'}
                spacing={2}
                sx={{
                    my: 2,
                }}
            >
                <img
                    src={book.image}
                    style={{
                        height: 180,
                        width: 120,
                        maxHeight: '60vh',
                        maxWidth: '40vh',
                        objectFit: 'cover',
                        borderRadius: 16,
                    }}
                    onClick={handleChooseBook}
                />

                <Stack spacing={1}
                       onClick={handleChooseBook}
                       sx={{
                           display: 'flex',
                           flex: 1
                       }}
                >
                    <Typography
                        fontWeight={600}
                        fontSize={20}
                    >
                        {book.name}
                    </Typography>

                    <Typography
                        fontSize={16}
                        fontWeight={500}
                    >
                        {book.authors.join(', ')}
                    </Typography>

                    <Stack direction={'row'}>
                        {stars}
                        <Typography>
                            {book.currentRating}/5
                        </Typography>
                    </Stack>

                    <Typography
                        fontSize={16}
                        fontWeight={500}
                    >
                        {book.genres.join(', ')}
                    </Typography>
                </Stack>

                {/*<Box sx={{*/}
                {/*    display: 'flex',*/}
                {/*    flex: 1*/}
                {/*}}/>*/}

                {!isInCart ?
                    <BookButton
                        sx={{
                            height: 42,
                            width: 120,
                            alignSelf: 'end'
                        }}
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
                        sx={{
                            height: 42,
                            // width: 120,
                            alignSelf: 'end'
                        }}
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
            <Divider/>
        </Stack>
    )
}

export default observer(BookItem)
