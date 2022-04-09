import { Box, Grid, IconButton, List, Stack, SvgIcon, Typography } from '@mui/material'
import ReviewCard from '../components/ReviewCard'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import rootStore from '../../../stores/RootStore'
import { observer } from 'mobx-react'
import ReviewPopup from '../popups/ReviewPopup'


const BookReviewGrid: React.FC = () => {
    const book = rootStore.library.chosenBook
    const reviews = rootStore.reviews.getBookReviews(book.id)

    const handleOpenReviewPopup = () => {
        rootStore.reviews.openReviewPopup()
    }

    return (
        <Grid
            item
            xs={12}
            md={6}
            sx={{ p: 0 }}

        >
            {rootStore.reviews.isReviewPopup && <ReviewPopup />}
            <Stack direction={'row'}
                   alignItems={'center'}>
                <Typography
                    // variant={'subtitle2'}
                    fontWeight={700}
                    fontSize={22}
                    fontFamily={'"Montserrat", sans-serif'}
                >
                    Отзывы
                </Typography>
                <IconButton
                    onClick={handleOpenReviewPopup}
                >
                    <SvgIcon fontSize={'large'}>
                        <AddCircleOutlineOutlinedIcon/>
                    </SvgIcon>
                </IconButton>
            </Stack>

            {
                reviews.length == 0 ?
                    <Box
                        sx={{
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography>
                            <Box
                                color={'#A4A4A4'}
                                fontWeight={600}
                                fontSize={36}
                                sx={{ textAlign: 'center', m: 1 }}
                            >
                                Нет отзывов
                            </Box>
                        </Typography>
                    </Box>
                    :
                    <List
                        sx={{
                            p: 2,
                            height: '70vh',
                            // width: '100%',
                            bgcolor: 'background.bookElements',
                            position: 'relative',
                            overflow: 'auto',
                            // maxHeight: 300,
                            '& ul': { margin: 0, padding: 0 },
                            '&::-webkit-scrollbar': {
                                width: 1,
                                background: 'transparent',
                            },
                        }}
                    >
                        {rootStore.reviews.getBookReviews(book.id).map((review) => <ReviewCard review={review}/>)}

                    </List>

            }
        </Grid>
    )
}

export default observer(BookReviewGrid)
