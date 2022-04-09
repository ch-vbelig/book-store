import { createTheme, responsiveFontSizes } from '@mui/material'
// import '../assets/css/fonts.css'


let theme = createTheme({
    // palette: {
    //     primary: {
    //         main: '#080E24',
    //     },
    //     success: {
    //         main: '#080E24',
    //     },
    // },
    // typography: {
    //     h1: {
    //         fontFamily: '\'Russo One\', sans-serif',
    //         textTransform: 'uppercase',
    //     },
    //     h2: {
    //         fontFamily: '\'Russo One\', sans-serif',
    //         textTransform: 'uppercase',
    //     },
    //     h3: {
    //         fontFamily: '\'Russo One\', sans-serif',
    //         textTransform: 'uppercase',
    //     },
    //     h4: {
    //         fontFamily: '\'Russo One\', sans-serif',
    //         textTransform: 'uppercase',
    //     },
    //     h5: {
    //         fontFamily: '\'Russo One\', sans-serif',
    //     },
    //     h6: {
    //         fontFamily: '\'Russo One\', sans-serif',
    //     },
    //     subtitle1: {
    //         fontFamily: '\'Montserrat\', sans-serif',
    //     },
    //     subtitle2: {
    //         fontFamily: '\'Montserrat\', sans-serif',
    //     },
    //     body1: {
    //         fontFamily: '\'Montserrat\', sans-serif',
    //     },
    //     body2: {
    //         fontFamily: '\'Montserrat\', sans-serif',
    //     },
    //     allVariants: {
    //         color: '#FFF',
    //     },
    // },
})

theme = responsiveFontSizes(theme)

export default theme
