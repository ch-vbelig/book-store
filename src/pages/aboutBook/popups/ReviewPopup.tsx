import { observer } from 'mobx-react'
import { Paper, Stack, SvgIcon, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import BookButton from '../../../components/button/BookButton'
import rootStore from '../../../stores/RootStore'
import ReactDOM from 'react-dom'
import BackgroundBlur from '../../../components/BackgroundBlur'
import StarIcon from '@mui/icons-material/Star'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import Review from '../../../entities/Review'


const ReviewPopup: React.FC = () => {

    const [isFloating, setIsFloating] = useState(true)
    const [floatingRating, setFloatingRating] = useState(-1)
    const [rating, setRating] = useState(-1)
    const [message, setMessage] = useState('')

    const handleClose = () => {
        rootStore.reviews.closeReviewPopup()
    }

    const handleFloatingRating = (rate) => {
        setIsFloating(rate >= 0)
        setFloatingRating(rate)
    }

    const handleRating = (rate) => {
        setIsFloating(false)
        setRating(rate)
    }

    const handleMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSaveReview = () => {
        const review = new Review()
        review.id = 1
        review.bookId = rootStore.library.chosenBook.id
        review.userName = rootStore.user.lastname
        review.rating = rating
        review.message = message
        review.date = new Date()
        review.likes = 0

        rootStore.reviews.reviews.push(review)
        handleClose()
    }

    const stars = Array.from({ length: 5 }, (_, i) =>
        <SvgIcon
            fontSize={'large'}
            onMouseEnter={() => handleFloatingRating(i)}
            onMouseLeave={() => handleFloatingRating(-1)}
            onClick={() => handleRating(i)}
        >
            {isFloating && i <= floatingRating || !isFloating && i <= rating ? <StarIcon/> : <StarBorderOutlinedIcon/>}
        </SvgIcon>,
    )

    return ReactDOM.createPortal(
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
                    // height: '80vh',
                    // height: { xs: '90vh', sm: '80vh' },
                    zIndex: 10,
                    px: 5,
                    py: 5,
                    overflow: 'scroll',
                    '&::-webkit-scrollbar': {
                        width: 0,
                        background: 'transparent',
                    },
                }}
            >

                <Stack
                    direction={'column'}
                    alignItems={'center'}
                    spacing={3}
                >
                    <Stack
                        direction={'row'}
                        spacing={2}
                        alignItems={'center'}
                    >
                        <Typography
                            variant={'h5'}
                        >
                            Рейтинг
                        </Typography>
                        <Stack direction={'row'}>{stars}</Stack>
                    </Stack>

                    <TextField
                        label="Ваш отзыв"
                        placeholder="Оставьте отзыв на книгу"
                        multiline
                        rows={6}
                        sx={{
                            width: 0.9,
                            '& .MuiInputBase-input': {
                                maxHeight: '60vh',
                                '&::-webkit-scrollbar': {
                                    width: 0,
                                    backgrth: 0,
                                    background: 'transparent',
                                },
                            },
                        }}
                        onChange={handleMessage}
                    >

                    </TextField>


                    <BookButton
                        onClick={handleSaveReview}
                    >
                        Оставить отзыв
                    </BookButton>
                </Stack>

            </Paper>
        </>
        , document.getElementById('portal') as HTMLElement,
    )
}

export default observer(ReviewPopup)