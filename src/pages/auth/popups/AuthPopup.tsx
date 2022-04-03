import { Box, Paper, Stack, TextField, Typography } from '@mui/material'
import BookButton from '../../components/button/BookButton'
import React from 'react'
import { observer } from 'mobx-react'
import stores from '../../../stores/Stores'
import authUserImage from '../../../assets/images/account_vector.svg'


const AuthPopup: React.FC = () => {
    const handleEnter = () => {
        stores.auth.authorize()
    }

    const handleToRegister = () => {
        stores.auth.toRegister()
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
                    label={'Логин'}
                    variant={'outlined'}
                    sx={{
                        width: '100%',
                    }}
                />

                <TextField
                    required
                    label={'Пароль'}
                    type={'password'}
                    variant={'outlined'}
                    sx={{
                        width: '100%',
                    }}
                />

                <BookButton
                    onClick={handleEnter}
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