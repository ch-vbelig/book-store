import { styled } from '@mui/material/styles'
import { Paper } from '@mui/material'


const BookPaper = styled(Paper)(({theme, elevation}) => ({
    marginTop: 20,
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    '&:hover':{
        boxShadow: '0px 0px 20px rgba(0,0,0,0.4)'
    },


}))

export default BookPaper