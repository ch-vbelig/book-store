import { Box, Paper, Stack, TextField, Typography } from '@mui/material'
import BookButton from '../../../components/button/BookButton'
import React, { ChangeEvent, useCallback, useState } from 'react'
import { observer } from 'mobx-react'
import rootStore from '../../../stores/RootStore'
import authUserImage from '../../../assets/images/account_vector.svg'


const AuthPopup: React.FC = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState(false)

    const handleLogin = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        setLogin(event.target.value)
    }, [login])

    const handlePassword = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        setPassword(event.target.value)
    }, [password])

    const handleEnter = () => {
        if (login == 'bbc7' && password == '1234') {
            rootStore.auth.authorize()
        } else {
            setIsError(true)
        }

    }

    const handleToRegister = () => {
        rootStore.auth.openRegisterPopup()
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
                // width: { xs: 240, sm: 360, lg: 420 },
                zIndex: 10,
                px: 5,
                py: 10
            }}
        >

            <Stack
                direction={'column'}
                alignItems={'center'}
                spacing={3}
            >
                <img
                    src={authUserImage}
                />
                <Typography variant={'h5'}>
                    Авторизация
                </Typography>


                <TextField
                    required
                    error={isError}
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
                    error={isError}
                    label={'Пароль'}
                    type={'password'}
                    variant={'outlined'}
                    value={password}
                    onChange={handlePassword}
                    helperText={isError ? 'Неверный логин или пароль' : ''}
                    sx={{
                        width: '100%',
                    }}
                />

                <BookButton
                    onClick={handleEnter}
                    sx={{
                        px: 4
                    }}
                >
                    Войти
                </BookButton>

                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',

                    }}
                >
                    <Typography sx={{
                        textDecoration: 'underline',
                    }}
                    >
                        Забыл пароль
                    </Typography>
                    <Typography
                        onClick={handleToRegister}
                        sx={{
                        textDecoration: 'underline'
                    }}
                    >
                        Регистрация
                    </Typography>
                </Box>

            </Stack>

        </Paper>
    )
}

export default observer(AuthPopup)