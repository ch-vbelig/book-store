import { styled } from '@mui/material/styles'
import { InputBase } from '@mui/material'


const CustomInputBase = styled(InputBase)(({theme, error}) => ({
    '& .MuiInputBase-input': {
        borderRadius: 1,
        border: (error) ? '1px solid #f00' : '1px solid #000',
        backgroundColor: 'transparent',
        position: 'relative',
        boxSizing: 'border-box',
        fontSize: 16,
        height: 48,
        // color: 'white',
        width: theme.breakpoints.values.sm * 0.75,
        maxWidth: '85vw',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-width',
        ]),
        '&:focus': {
            border: '1.5px solid #00f',
        },
        '&.Mui-disabled': {
            '-webkitTextFillColor': '#FFFFFF',
        },
    },

}))

export default CustomInputBase