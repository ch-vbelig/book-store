import { observer } from 'mobx-react'
import { Box, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, useCallback, useState } from 'react'
import BookButton from '../../../components/button/BookButton'
import rootStore from '../../../stores/RootStore'


const SignUpPopup: React.FC = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [house, setHouse] = useState('')
    const [addressIndex, setAddressIndex] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [isError, setIsError] = useState(false)
    const [isPasswordNotMatch, setIsPasswordNotMatch] = useState(false)

    const handleFirstname = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        setFirstname(event.target.value)
    }, [])

    const handleLastname = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        setLastname(event.target.value)
    }, [])

    const handleCity = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        setCity(event.target.value)
    }, [])

    const handleStreet = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        setStreet(event.target.value)
    }, [])

    const handleHouse = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        setHouse(event.target.value)
    }, [])

    const handleAddressIndex = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        setAddressIndex(event.target.value)
    }, [])

    const handleLogin = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        setLogin(event.target.value)
    }, [])

    const handlePassword = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        setPassword(event.target.value)
    }, [])

    const handleRepeatPassword = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        setRepeatPassword(event.target.value)
    }, [])

    const handleRegister = () => {
        if (password !== repeatPassword) {
            setIsPasswordNotMatch(true)
        } else {
            rootStore.auth.authorize()
        }
    }

    const handleToAuthorize = () => {
        rootStore.auth.openAuthPopup()
    }

    return (
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
                    Регистрация
                </Typography>

                <Typography
                    variant={'body1'}
                    sx={{
                        width: '100%',
                    }}
                >
                    Личные данные:
                </Typography>

                <TextField
                    required
                    label={'Имя'}
                    value={firstname}
                    onChange={handleFirstname}
                    variant={'outlined'}
                    sx={{
                        width: '100%',
                    }}
                />

                <TextField
                    required
                    label={'Фамилия'}
                    variant={'outlined'}
                    value={lastname}
                    onChange={handleLastname}
                    sx={{
                        width: '100%',
                    }}
                />
                <TextField
                    required
                    label={'Город'}
                    variant={'outlined'}
                    value={city}
                    onChange={handleCity}
                    sx={{
                        width: '100%',
                    }}
                />
                <TextField
                    required
                    label={'Улица'}
                    variant={'outlined'}
                    value={street}
                    onChange={handleStreet}
                    sx={{
                        width: '100%',
                    }}
                />
                <TextField
                    required
                    label={'Номер дома'}
                    variant={'outlined'}
                    value={house}
                    onChange={handleHouse}
                    sx={{
                        width: '100%',
                    }}
                />
                <TextField
                    required
                    label={'Индекс'}
                    variant={'outlined'}
                    value={addressIndex}
                    onChange={handleAddressIndex}
                    sx={{
                        width: '100%',
                    }}
                />
                <Typography
                    variant={'body1'}
                    sx={{
                        width: '100%',
                    }}
                >
                    Данные аккаунта:
                </Typography>

                <TextField
                    required
                    label={'Логин'}
                    variant={'outlined'}
                    value={login}
                    onChange={handleLogin}
                    sx={{
                        width: '100%',
                    }}
                />

                <TextField
                    required
                    error={isPasswordNotMatch}
                    label={'Пароль'}
                    type={'password'}
                    variant={'outlined'}
                    value={password}
                    onChange={handlePassword}
                    sx={{
                        width: '100%',
                    }}
                />

                <TextField
                    required
                    error={isPasswordNotMatch}
                    label={'Повторите пароль'}
                    type={'password'}
                    variant={'outlined'}
                    value={repeatPassword}
                    onChange={handleRepeatPassword}
                    sx={{
                        width: '100%',
                    }}
                />

                <BookButton
                    onClick={handleRegister}
                >
                    Зарегистрироваться
                </BookButton>

                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                    }}
                >
                    <Typography>
                        Уже есть аккаунт?
                    </Typography>
                    <Typography
                        onClick={handleToAuthorize}
                        sx={{
                            textDecoration: 'underline',
                        }}
                    >
                        Авторизируйтесь
                    </Typography>
                </Box>

            </Stack>

        </Paper>
    )
}

export default observer(SignUpPopup)