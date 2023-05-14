import { useState } from 'react'
import './App.css'
import Reg from './components/Reg/Reg'

function App() {
  const [show, setShow] = useState(false)
  const [reg, setReg] = useState(false)
  const [out, setOut] = useState(false)


  return (
    <>
    
    {!show && !reg ? <button onClick={()=> show? setShow(false) : setShow(true)}>Регистрация</button> : <></>}
    {show && <Reg setReg={setReg} setShow={setShow} setOut={setOut}/>}
    {out && <button onClick={() => {
       setShow(false)
       setReg(false)
       setOut(false)
    }}>Выйти</button>}
    </>
  )
}

export default App
