import React, { useContext, createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Message from './Message/Message'
import Home from './Home/Home'
import Header from './Header/Header'
import Profile from './Profil/Profil'
import { useState } from 'react'

export const myContext = createContext()

const Router = () => {
    const [data, setData] = useState({
        email: '@gmail.com',
        name: '',
        password: '8 символов',
      })
    const [out, setOut] = useState(false)
    const [show, setShow] = useState(false)

return (
    <>
      <myContext.Provider value={{data, setData}}>
        <BrowserRouter>
            <Header out={out} setOut={setOut} show={show} setShow={setShow}/>
            {show && <div className='shadow'></div>}
            <Routes>
                <Route element={<Message />} path='/message'/>
                <Route element={<Home />} path='/'/>
                <Route element={<Profile out={out} data={data}/>} path='/profile'/>
            </Routes>
        </BrowserRouter>
     </myContext.Provider>
    </>
)
}
export default Router