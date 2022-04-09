import { styled } from '@mui/material/styles'
import { Tabs } from '@mui/material'


const BookSlider = styled(Tabs)(({theme}) => ({
    // paddingTop: 20,
    // paddingBottom: 20,
    alignItems: 'center',
    '& .MuiTabScrollButton-root':{
        height: 36,
        borderRadius: 16,
        boxShadow: '0px 10px 20px rgba(0,0,0,0.3)',
    }
}))

export default BookSlider