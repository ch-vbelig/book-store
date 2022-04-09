import React, { ChangeEvent, useCallback } from 'react'
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    ButtonBase,
    InputBase,
    Menu,
    Stack,
    styled,
    SvgIcon,
    Toolbar,
    Typography,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import rootStore from '../../stores/RootStore'
import { observer } from 'mobx-react'
import MenuItem from '@mui/material/MenuItem'
import { red } from '@mui/material/colors'
import { useLocation, useNavigate } from 'react-router-dom'
import { Pages } from '../../constants/pages'
import MenuIcon from '@mui/icons-material/Menu'


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

    const navigate = useNavigate()
    const location = useLocation()

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const [isPopupOpen, setIsPopupOpen] = React.useState<boolean>(false)

    const isMenuOpen = Boolean(anchorEl)

    const handleOpenAuthPopup = useCallback(() => {
        rootStore.auth.toAuthorize()
    }, [])

    const handleToMain = () => {
        if (location.pathname !== Pages.MAIN) {
            navigate(Pages.MAIN)
        }
    }

    const handleLogOut = useCallback(() => {
        rootStore.auth.logout()
        handleMenuClose()
    }, [])

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        rootStore.search.setSearch(event.target.value)
        // if (event.target.value == '') navigate(Pages.MAIN)
    }

    const handleOpenCart = useCallback(() => {
        navigate(Pages.CART)
    }, [])

    const handleToMyFavorite = () => {
        navigate(Pages.FAVORITE)
    }

    const handleToMyOrders = () => {
        navigate(Pages.ORDERS)
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
            <MenuItem
                onClick={handleToMyOrders}>
                Мои заказы
            </MenuItem>

            <MenuItem
                onClick={handleToMyFavorite}>
                Избранное
            </MenuItem>

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
                    <ButtonBase
                        centerRipple
                        sx={{
                            minWidth: 64,
                        }}
                        onClick={handleToMain}
                    >
                        <SvgIcon fontSize={'large'}>
                            <MenuIcon/>
                        </SvgIcon>
                    </ButtonBase>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={handleChange}
                            onKeyDown={(event) => {
                                if (event.code == 'Enter' && location.pathname !== Pages.SEARCH) {
                                    // rootStore.library.setSearch(event.target.value
                                    navigate(Pages.SEARCH)
                                }
                            }}
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
                            onClick={handleOpenCart}
                        >
                            <Badge
                                badgeContent={rootStore.cart.cart.length}
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
                            !rootStore.auth.isAuthorized ?
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
                                        {/*<SvgIcon fontSize={'large'}>*/}
                                        {/*    <AccountCircleOutlinedIcon/>*/}
                                        {/*</SvgIcon>*/}
                                        <Avatar sx={{
                                            bgcolor: red[500],
                                            border: '2px solid',
                                            borderColor: '#E4E4E4',
                                        }}>
                                            <Typography>
                                                <Box>
                                                    {`${rootStore.user.firstname.at(0)}${rootStore.user.lastname.at(0)}`}
                                                </Box>
                                            </Typography>
                                        </Avatar>
                                    </Badge>

                                    <Typography variant={'h6'}
                                                sx={{
                                                    mx: 2,
                                                    display: { md: 'flex', xs: 'none' },
                                                }}
                                    >
                                        {`${rootStore.user.lastname} ${rootStore.user.firstname} `}
                                    </Typography>
                                </ButtonBase>
                        }

                    </Stack>


                </Toolbar>

            </AppBar>
            {renderMenu}
        </Box>

    )

}

export default observer(BookAppBar)

