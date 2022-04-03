import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Pages } from './constants/pages'
import Main from './pages/main/Main'
import Search from './pages/search/Search'
import BookAppBar from './pages/components/appbar/BookAppBar'
import PrimarySearchAppBar from './pages/components/AppBar'


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <BookAppBar/>
            <Routes>
                <Route path={Pages.MAIN} element={<Main/>}/>
                <Route path={Pages.SEARCH} element={<Search/>}/>

            </Routes>

        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
)