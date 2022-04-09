import { alpha, styled } from '@mui/material/styles'


const BackgroundBlur = styled('div')(({ theme }) => ({
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: alpha(theme.palette.common.black, 0.2),
}))

export default BackgroundBlur

