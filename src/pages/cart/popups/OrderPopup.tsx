import { observer } from 'mobx-react'
import { Divider, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import BookButton from '../../../components/button/BookButton'
import rootStore from '../../../stores/RootStore'
import BackgroundBlur from '../../../components/BackgroundBlur'


const OrderPopup: React.FC = () => {

    const [firstname, setFirstName] = useState(rootStore.user.firstname)
    const [lastname, setLastName] = useState(rootStore.user.lastname)
    const [email, setEmail] = useState(rootStore.user.email)
    const [city, setCity] = useState(rootStore.user.city)
    const [street, setStreet] = useState(rootStore.user.street)
    const [house, setHouse] = useState(rootStore.user.house)
    const [addressIndex, setAddressIndex] = useState(rootStore.user.addressIndex)

    const handleChangeFirstName = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setFirstName(event.target.value)
    }

    const handleChangeLastName = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setLastName(event.target.value)
    }

    const handleChangeEmail = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setEmail(event.target.value)
    }

    const handleChangeCity = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setCity(event.target.value)
        rootStore.cart.setCity(event.target.value)
    }

    const handleChangeStreet = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setStreet(event.target.value)
        rootStore.cart.setStreet(event.target.value)
    }

    const handleChangeHouse = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setHouse(event.target.value)
        rootStore.cart.setHouse(event.target.value)
    }

    const handleChangeAddressIndex = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setAddressIndex(event.target.value)
        rootStore.cart.setIndex(event.target.value)
    }

    const handleClose = () => {
        rootStore.cart.closeOrderPopup()
    }

    const handleMakeOrder = () => {
        rootStore.cart.makeOrder()
        rootStore.cart.closeOrderPopup()
    }

    if (!rootStore.cart.isOrderPopup) return null
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
                        value={firstname}
                        onChange={handleChangeFirstName}
                        sx={{
                            width: '100%',
                        }}
                    />

                    <TextField
                        required
                        label={'Фамилия'}
                        variant={'outlined'}
                        value={lastname}
                        onChange={handleChangeLastName}
                        sx={{
                            width: '100%',
                        }}
                    />

                    <TextField
                        required
                        label={'Email'}
                        variant={'outlined'}
                        value={email}
                        onChange={handleChangeEmail}
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
                        value={city}
                        onChange={handleChangeCity}
                        sx={{
                            width: '100%',
                        }}
                    />
                    <TextField
                        required
                        label={'Улица'}
                        variant={'outlined'}
                        value={street}
                        onChange={handleChangeStreet}
                        sx={{
                            width: '100%',
                        }}
                    />

                    <TextField
                        required
                        label={'Дом'}
                        variant={'outlined'}
                        onChange={handleChangeHouse}
                        value={house}
                        sx={{
                            width: '100%',
                        }}
                    />

                    <TextField
                        required
                        label={'Индекс'}
                        value={addressIndex}
                        variant={'outlined'}
                        onChange={handleChangeAddressIndex}
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