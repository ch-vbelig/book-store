import { Book } from '../../../entities/Book'
import sherlockImage from '../../../assets/images/sherlock.png'
import { Stack, Typography } from '@mui/material'
import BookPaper from '../../../components/bookElements/BookPaper'
import { useCallback } from 'react'
import rootStore from '../../../stores/RootStore'
import { useNavigate } from 'react-router-dom'
import { Pages } from '../../../constants/pages'


interface BookCoverProps {
    book: Book
}


const BookCover: React.FC<BookCoverProps> = ({ book }) => {
    const navigate = useNavigate()

    const handleChooseBook = useCallback(() => {
        rootStore.library.setBook(book)
        navigate(Pages.ABOUT_BOOK)
    }, [])

    return (
        <BookPaper elevation={1}
                   onClick={handleChooseBook}
        >
            <Stack
                direction={'column'}
                alignContent={'center'}
                sx={{
                    m: 1,
                    maxHeight: '80vh',
                    width: 160,
                    maxWidth: '80vw',
                }}
            >
                <img
                    src={sherlockImage}
                    style={{
                        margin: 'auto',
                        height: 220,
                        width: 140,
                        maxHeight: '50vh',
                        objectFit: 'cover',
                        borderRadius: 16,
                    }}
                />
                <Typography
                    variant={'subtitle2'}
                    fontSize={14}
                    sx={{
                        mt: 1,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                        display: '-webkit-box',
                    }}
                >
                    {book.name}
                </Typography>

                <Typography
                    fontSize={12}
                    fontWeight={500}
                >
                    {book.authors[0]}
                </Typography>
            </Stack>
        </BookPaper>
    )

}

export default BookCover