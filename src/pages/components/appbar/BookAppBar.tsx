import React, { useCallback } from 'react'
import {
    AppBar,
    Badge, Box,
    ButtonBase,
    InputBase, Menu,
    Stack,
    styled,
    SvgIcon,
    Toolbar,
    Typography,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import stores from '../../../stores/Stores'
import { observer } from 'mobx-react'
import MenuItem from '@mui/material/MenuItem'
import Auth from '../../auth/Auth'


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    width: theme.breakpoints.values.sm * 0.6,
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    color: '#686868',
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#686868',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
    },
}))

const BookAppBar: React.FC = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const [isPopupOpen, setIsPopupOpen] = React.useState<boolean>(false);

    const isMenuOpen = Boolean(anchorEl)

    const handleOpenAuthPopup = useCallback(() => {
        stores.auth.toAuthorize()
    },[])

    // const handleCloseAuthPopup = useCallback(() => {
    //     setIsPopupOpen(false)
    // },[])

    // const handleAuthorize = useCallback(() => {
    //     stores.auth.authorize()
    //     handleCloseAuthPopup()
    // }, [])

    const handleLogOut = useCallback(() => {
        stores.auth.logout()
        handleMenuClose()
    }, [])

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }


    const menuId = 'primary-search-account-menu'
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={() => {
            }}>Profile</MenuItem>
            <MenuItem onClick={() => {
            }}> My account</MenuItem>

            <MenuItem onClick={handleLogOut}> Log out</MenuItem>

        </Menu>
    )

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position={'static'}
                elevation={0}
                sx={{
                    background: '#686868',
                }}
            >
                <Toolbar sx={{
                    alignItems: 'stretch',
                }}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>

                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                    >
                        <ButtonBase
                            centerRipple
                            sx={{
                                minWidth: 64,
                            }}
                        >
                            <Badge
                                badgeContent={17}
                                color={'error'}
                            >
                                <SvgIcon fontSize={'large'}>
                                    <ShoppingCartOutlinedIcon/>
                                </SvgIcon>
                            </Badge>

                            <Typography variant={'h6'}
                                        sx={{
                                            mx: 2,
                                            display: { md: 'flex', xs: 'none' },
                                        }}
                            >
                                Корзина
                            </Typography>
                        </ButtonBase>

                        {
                            !stores.auth.isAuthorized ?
                                <ButtonBase
                                    centerRipple
                                    onClick={handleOpenAuthPopup}
                                    sx={{
                                        minWidth: 64,
                                    }}
                                >

                                    <SvgIcon fontSize={'large'}>
                                        <AccountCircleOutlinedIcon/>
                                    </SvgIcon>

                                    <Typography variant={'h6'}
                                                sx={{
                                                    mx: 2,
                                                    display: { md: 'flex', xs: 'none' },
                                                }}
                                    >
                                        Войти
                                    </Typography>
                                </ButtonBase>
                                :
                                <ButtonBase
                                    centerRipple
                                    onClick={handleProfileMenuOpen}
                                    sx={{
                                        minWidth: 64,
                                    }}
                                >
                                    <Badge
                                        badgeContent={2}
                                        color={'error'}
                                    >
                                        <SvgIcon fontSize={'large'}>
                                            <AccountCircleOutlinedIcon/>
                                        </SvgIcon>
                                    </Badge>

                                    <Typography variant={'h6'}
                                                sx={{
                                                    mx: 2,
                                                    display: { md: 'flex', xs: 'none' },
                                                }}
                                    >
                                        {`${stores.user.lastname} ${stores.user.firstname} `}
                                    </Typography>
                                </ButtonBase>
                        }

                    </Stack>


                </Toolbar>

            </AppBar>
            {renderMenu}
            <Auth />
        </Box>

    )

}

export default observer(BookAppBar)

