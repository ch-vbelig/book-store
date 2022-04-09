import { observer } from 'mobx-react'
import { Box, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import BookButton from '../../../components/button/BookButton'
import rootStore from '../../../stores/RootStore'


const SignUpPopup: React.FC = () => {
    const handleRegister = () => {
        console.log('Registration')
        rootStore.auth.authorize()
    }

    const handleToAuthorize = () => {
        rootStore.auth.toAuthorize()
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
                overflow: 'scroll'
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
                    label={'Город'}
                    variant={'outlined'}
                    sx={{
                        width: '100%',
                    }}
                />
                <TextField
                    required
                    label={'Адрес'}
                    variant={'outlined'}
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

                <TextField
                    required
                    label={'Повторите пароль'}
                    type={'password'}
                    variant={'outlined'}
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