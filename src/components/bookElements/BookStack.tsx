import { styled } from '@mui/material/styles'
import { Stack } from '@mui/material'


const BookStack = styled(Stack)(({theme}) => ({
    overflowX: 'auto',
    marginTop: 8,
    marginBottom: 8,
    padding: 8,
    // scrollbar
    '&::-webkit-scrollbar': {
        width: 0,
        background: 'transparent',
    },
}))

export default BookStack