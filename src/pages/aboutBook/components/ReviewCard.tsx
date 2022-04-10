import Review from '../../../entities/Review'
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Collapse,
    IconButton,
    Stack,
    SvgIcon,
    TextField,
    Typography,
} from '@mui/material'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React from 'react'
import CommentCard from './CommentCard'
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded'
import StarIcon from '@mui/icons-material/Star'
import SendIcon from '@mui/icons-material/Send'
import ExpandMore from '../../../entities/ExpandMore'
import rootStore from '../../../stores/RootStore'
import { observer } from 'mobx-react'


interface ReviewProps {
    review: Review
}


const ReviewCard: React.FC<ReviewProps> = ({ review }) => {
    const [expanded, setExpanded] = React.useState(false)
    const [message, setMessage] = React.useState('')
    const comments = rootStore.library.comments.filter((comment) => comment.reviewId == review.id)

    const stars = Array.from({ length: review.rating }, (_, i) => <StarIcon />)

    const handleMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    const handleSendClick = () => {
        rootStore.library.addComment(review.id, message)
        setMessage('')
    }

    return (
        <Card variant={'outlined'} sx={{
            m: 1,
            width: 1,
        }}
        >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                title="Shrimp and Chorizo Paella"
                subheader={<Stack direction={'row'}>{stars}</Stack>}
                sx={{
                    py: 1,
                }}
            />
            <CardContent
                sx={{
                    px: 2,
                    py: 1,
                }}
            >
                <Typography variant="body2" color="text.secondary">
                    {review.message}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <Stack direction={'row'} spacing={1}>
                    <Typography fontWeight={600}>
                        34
                    </Typography>
                    <Typography>
                        нравится
                    </Typography>
                </Stack>

                <IconButton onClick={handleExpandClick}>
                    <ChatBubbleOutlineRoundedIcon />
                </IconButton>
                <Stack direction={'row'} spacing={1} onClick={handleExpandClick}>
                    <Typography fontWeight={600}>
                        {comments.length}
                    </Typography>
                    <Typography>
                        ответа
                    </Typography>
                </Stack>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Stack sx={{
                    p:1
                }}>
                    {comments.map((comment) => <CommentCard comment={comment}/>)}

                    <Stack
                        direction={'row'}
                        alignItems={'start'}
                        spacing={1}
                    >

                        <TextField
                            label="Ваше сообщение"
                            placeholder="Оставьте отзыв на книгу"
                            multiline
                            rows={3}
                            value={message}
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

                        <IconButton
                            onClick={handleSendClick}
                        >
                            <SvgIcon>
                                <SendIcon />
                            </SvgIcon>
                        </IconButton>
                    </Stack>
                </Stack>
            </Collapse>
        </Card>
    )

}

export default observer(ReviewCard)