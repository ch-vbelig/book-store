import rootStore from '../../stores/RootStore'
import { Box, Divider, Stack, Typography } from '@mui/material'
import React, { useCallback } from 'react'
import { observer } from 'mobx-react'
import CartBookItem from './components/CartBookItem'
import BookButton from '../../components/button/BookButton'
import OrderPopup from './popups/OrderPopup'


const Cart: React.FC = () => {

    const cartBooks = rootStore.cart.cart
    const isAuthorized = rootStore.auth.isAuthorized
    const isAuthPopup = rootStore.auth.isAuthPopup
    const isOrderPopup = rootStore.cart.isOrderPopup

    const handleMakeOrder = useCallback(() => {
        if (!isAuthorized){
            handleToAuthPopup()
        } else {
            handleToOrderPopup()
        }
    }, [isAuthorized])

    const handleToAuthPopup = useCallback(() => {
        rootStore.auth.openAuthPopup()
    },[])

    const handleToOrderPopup = useCallback(() => {
        rootStore.cart.openOrderPopup()
    },[])

    return (
        <>
            {isOrderPopup && <OrderPopup />}
            <Stack
                sx={{
                    px: 6,
                    py: 3,
                }}
            >
                <Typography variant={'h6'}
                            fontWeight={600}
                            fontSize={26}
                            fontFamily={'"Montserrat", sans-serif'}
                >
                    Корзина
                </Typography>
                <Divider/>

                {
                    cartBooks.length == 0 ?
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
                                    Корзина пуста
                                </Box>
                            </Typography>
                        </Box>
                        :
                        cartBooks.map((bookOrder) => <CartBookItem bookOrder={bookOrder}/>)
                }

                <BookButton
                    variant={'outlined'}
                    sx={{
                        mt: 2,
                        alignSelf: 'end',
                    }}
                    onClick={handleMakeOrder}
                >
                    <Typography variant={'h6'}
                                fontWeight={500}
                                fontSize={26}
                                fontFamily={'"Montserrat", sans-serif'}
                    >
                        Итого: {rootStore.cart.totalPrice}руб.
                    </Typography>
                </BookButton>
            </Stack>
        </>
    )

}

export default observer(Cart)