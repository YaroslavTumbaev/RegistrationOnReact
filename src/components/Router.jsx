import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Message from './Message/Message'
import Home from './Home/Home'
import Header from './Header/Header'


const Router = () => {
return (
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route element={<Message />} path='/message'/>
                <Route element={<Home />} path='/'/>
                {/* <Route element={<CatFact />} path='/catfact'/> */}
            </Routes>
        </BrowserRouter>
    </>
)
}
export default Router