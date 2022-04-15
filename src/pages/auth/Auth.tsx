import { observer } from 'mobx-react'
import ReactDOM from 'react-dom'
import React from 'react'
import rootStore from '../../stores/RootStore'
import AuthPopup from './popups/AuthPopup'
import SignUpPopup from './popups/SignUpPopup'
import BackgroundBlur from '../../components/BackgroundBlur'


const Auth: React.FC = () => {
    if (!rootStore.auth.isAuthPopup && !rootStore.auth.isRegisterPopup) return null

    const handleClose = () => {
      rootStore.auth.closeAuthPopup()
    }

    return ReactDOM.createPortal(
        <>
            <BackgroundBlur onClick={handleClose}/>
            {rootStore.auth.isAuthPopup && <AuthPopup/>}
            {rootStore.auth.isRegisterPopup && <SignUpPopup/>}
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