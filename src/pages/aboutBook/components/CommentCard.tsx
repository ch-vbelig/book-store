import Comment from '../../../entities/Comment'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { red } from '@mui/material/colors'


interface CommentProps {
    comment: Comment
}


const CommentCard: React.FC<CommentProps> = ({ comment }) => {
    return (
        <Stack direction={'row'}>
            <Box
                sx={{
                    flex: comment.id == 1 ? 1 : 0,
                }}
            >
            </Box>
            <Stack
                direction={comment.id == 1 ? 'row-reverse' : 'row'}
            >
                <Avatar sx={{ bgcolor: red[500] }}>
                    R
                </Avatar>

                <Stack direction={'column'}
                       sx={{
                           p: 1,
                           m: 1,
                           flex: 1,
                           // maxWidth: 0.5,
                           width: 240   ,
                           backgroundColor: comment.id == 1 ? '#CACACA' : '#EAEAEA',
                           borderRadius:  comment.id == 1 ? '20px 0px 20px 20px' : '0px 20px 20px 20px',
                       }}
                >
                    <Typography
                    >
                        {comment.userName}
                    </Typography>
                    <Typography

                    >
                        {comment.message}
                    </Typography>
                </Stack>

            </Stack>
        </Stack>
    )
}

export default CommentCard