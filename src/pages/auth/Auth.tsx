import { observer } from 'mobx-react'
import ReactDOM from 'react-dom'
import React from 'react'
import { alpha, styled } from '@mui/material/styles'
import stores from '../../stores/Stores'
import AuthPopup from './popups/AuthPopup'
import SignUpPopup from './popups/SignUpPopup'


const BackgroundBlur = styled('div')(({ theme }) => ({
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: alpha(theme.palette.common.black, 0.2),
}))

const Auth: React.FC = () => {
    if (!stores.auth.isAuthPopup && !stores.auth.isRegisterPopup) return null

    const handleClose = () => {
      stores.auth.leaveAuthPopup()
    }

    return ReactDOM.createPortal(
        <>
            <BackgroundBlur onClick={handleClose}/>
            {stores.auth.isAuthPopup && <AuthPopup/>}
            {stores.auth.isRegisterPopup && <SignUpPopup/>}
        </>
        , document.getElementById('portal') as HTMLElement,
    )
}

export default observer(Auth)

// <Button
//                 variant={'contained'}
//                 disableElevation
//                 disabled={sent}
//                 onClick={handleReset}
//                 sx={{
//                     width: theme.breakpoints.values.sm * 0.75,
//                     maxWidth: '85vw',
//                     py: 2,
//                     px: 4,
//                     mt: 2,
//                     background: '#554ADA',
//                     borderRadius: 0.5,
//                     '&:hover': {
//                         background: '#5d53d9',
//                     },
//                     '&.Mui-disabled': {
//                         background: '#36344b',
//                     },
//                 }}
//             >
//                 <Typography
//                     fontWeight={600}
//                     fontSize={'1.25rem'}
//                 >
//                     Remind me
//                 </Typography>
//             </Button>