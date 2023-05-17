import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Message from './Message/Message'
import Home from './Home/Home'
import Header from './Header/Header'
import Profile from './Profil/Profil'
import { useState } from 'react'


const Router = () => {
    const [data, setData] = useState({
        email: '',
        name: '',
        password: '',
      })
    const [out, setOut] = useState(false)

return (
    <>
        <BrowserRouter>
            <Header out={out} setOut={setOut} data={data} setData={setData}/>
            <Routes>
                <Route element={<Message />} path='/message'/>
                <Route element={<Home />} path='/'/>
                <Route element={<Profile out={out} data={data}/>} path='/profile'/>
            </Routes>
        </BrowserRouter>
    </>
)
}
export default Router