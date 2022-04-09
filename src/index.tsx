import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Pages } from './constants/pages'
import Main from './pages/main/Main'
import Search from './pages/search/Search'
import BookAppBar from './components/appbar/BookAppBar'
import AboutBook from './pages/aboutBook/AboutBook'
import Cart from './pages/cart/Cart'
import Auth from './pages/auth/Auth'
import OrderPopup from './pages/cart/popups/OrderPopup'
import FilterPopup from './pages/search/popups/FilterPopup'
import Favorite from './pages/favorite/Favorite'
import Orders from './pages/orders/Orders'


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <BookAppBar/>
            <Auth/>
            <OrderPopup/>
            <FilterPopup/>
            <Routes>
                <Route path={Pages.MAIN} element={<Main/>}/>
                <Route path={Pages.SEARCH} element={<Search/>}/>
                <Route path={Pages.ABOUT_BOOK} element={<AboutBook/>}/>
                <Route path={Pages.CART} element={<Cart/>}/>
                <Route path={Pages.FAVORITE} element={<Favorite/>}/>
                <Route path={Pages.ORDERS} element={<Orders/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
)