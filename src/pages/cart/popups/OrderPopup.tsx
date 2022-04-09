import { observer } from 'mobx-react'
import { Divider, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import BookButton from '../../../components/button/BookButton'
import rootStore from '../../../stores/RootStore'
import BackgroundBlur from '../../../components/BackgroundBlur'


const OrderPopup: React.FC = () => {

    if (!rootStore.cart.isOrderPopup) return null

    const handleClose = () => {
        rootStore.cart.closeOrderPopup()
    }

    const handleMakeOrder = () => {
        rootStore.cart.makeOrder()
        rootStore.cart.closeOrderPopup()
    }

    return (
        <>
            <BackgroundBlur onClick={handleClose}/>
            <Paper
                elevation={3}
                sx={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 420,
                    maxWidth: '70vw',
                    height: '80vh',
                    // height: { xs: '90vh', sm: '80vh' },
                    zIndex: 10,
                    px: 5,
                    py: 5,
                    overflow: 'scroll',
                }}
            >

                <Stack
                    direction={'column'}
                    alignItems={'center'}
                    spacing={3}
                >
                    <Typography
                        variant={'h5'}
                    >
                        Оформление заказа
                    </Typography>

                    <Typography
                        variant={'body1'}
                        fontSize={20}
                        fontWeight={600}
                        textAlign={'center'}
                        sx={{
                            width: '100%',
                        }}
                    >
                        Данные покупателя:
                    </Typography>

                    <TextField
                        required
                        label={'Имя'}
                        variant={'outlined'}
                        sx={{
                            width: '100%',
                        }}
                    />

                    <TextField
                        required
                        label={'Фамилия'}
                        variant={'outlined'}
                        sx={{
                            width: '100%',
                        }}
                    />

                    <TextField
                        required
                        label={'Email'}
                        variant={'outlined'}
                        sx={{
                            width: '100%',
                        }}
                    />

                    <Divider variant={'middle'}/>

                    <Typography
                        variant={'body1'}
                        fontSize={20}
                        fontWeight={600}
                        textAlign={'center'}
                        sx={{
                            width: '100%',
                        }}
                    >
                        Данные доставки:
                    </Typography>

                    <TextField
                        required
                        label={'Город'}
                        variant={'outlined'}
                        sx={{
                            width: '100%',
                        }}
                    />
                    <TextField
                        required
                        label={'Улица'}
                        variant={'outlined'}
                        sx={{
                            width: '100%',
                        }}
                    />

                    <TextField
                        required
                        label={'Дом'}
                        variant={'outlined'}
                        sx={{
                            width: '100%',
                        }}
                    />

                    <TextField
                        required
                        label={'Индекс'}
                        variant={'outlined'}
                        sx={{
                            width: '100%',
                        }}
                    />

                    <BookButton
                        sx={{
                            mt: 2,
                            alignSelf: 'center',
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
            </Paper>
        </>
    )
}

export default observer(OrderPopup)