import React from 'react'
import { useState } from 'react'
import Reg from '../Registration/Reg/Reg'
import styles from './Header.module.css'

const Header = () => {
    const [show, setShow] = useState(false)
    const [reg, setReg] = useState(false)
    const [out, setOut] = useState(false)


return (
    <>
        <div className={styles.header}>
            <div className={styles.btn}>
                
            </div>




            <div className={styles.headerReg}>
                {!show && !reg ? <button onClick={()=> show? setShow(false) : setShow(true)} className={styles.btn}>Регистрация</button> : <></>}
                {show && <Reg setReg={setReg} setShow={setShow} setOut={setOut}/>}
                {out && <button onClick={() => {
                setShow(false)
                setReg(false)
                setOut(false)
                }}>Выйти</button>}
            </div>

        </div>
    </>
    )
}
export default Header