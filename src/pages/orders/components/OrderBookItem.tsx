import BookOrder from '../../../entities/BookOrder'
import { Box, Divider, Stack, Typography } from '@mui/material'
import BookButton from '../../../components/button/BookButton'
import React, { useCallback, useState } from 'react'
import rootStore from '../../../stores/RootStore'
import { observer } from 'mobx-react'


interface OrderBookItemProps {
    bookOrder: BookOrder
}


const OrderBookItem: React.FC<OrderBookItemProps> = ({ bookOrder }) => {
    const book = bookOrder.book
    const [bookNumber, setBookNumber] = useState(bookOrder.number)

    const handleAdd = useCallback(() => {
        rootStore.cart.addBookOrder(book)
        setBookNumber(bookNumber + 1)
    }, [bookNumber])

    const handleRemove = useCallback(() => {
        rootStore.cart.removeBookOrder(book)
        if (bookNumber > 0) {
            setBookNumber(bookNumber - 1)
        }
    }, [bookNumber])

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
                />

                <Stack spacing={1}
                       sx={{
                           display: 'flex',
                           flex: 1,
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

                </Stack>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <Stack
                        direction={'row'}
                        spacing={1}
                        alignItems={'center'}
                        sx={{}}
                    >

                        <Typography>
                            {bookNumber}шт
                        </Typography>

                    </Stack>
                    <BookButton
                        sx={{
                            height: 42,
                            width: 120,
                            alignSelf: 'flex-end',
                        }}
                        // onClick={handleAddToCart}
                    >
                        <Typography
                            fontSize={16}
                            fontWeight={500}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            {book?.price * bookNumber}р.
                        </Typography>
                    </BookButton>

                </Box>
            </Stack>
            <Divider/>
        </Stack>
    )
}

export default observer(OrderBookItem)