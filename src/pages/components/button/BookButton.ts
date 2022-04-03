import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'


const BookButton = styled(Button)(({theme, variant}) => ({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '8px 40px',
    border: '1px solid',
    borderRadius: 20,
    lineHeight: 1.5,
    backgroundColor: variant == 'outlined' ? '#FFFFFF' : '#000000',
    borderColor: variant == 'outlined' ? '#000000' : '#FFFFFF',
    color: variant == 'outlined' ? '#000000' : '#FFFFFF',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: variant == 'outlined' ? '#FFFFFF' : '#000000',
        borderColor: variant == 'outlined' ? '#FFFFFF' : '#000000',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        // backgroundColor: '#0062cc',
        // borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
}));

export default BookButton