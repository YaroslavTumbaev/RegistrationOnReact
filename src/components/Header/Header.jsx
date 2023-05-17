import React from 'react'
import { useState } from 'react'
import Reg from '../Registration/Reg/Reg'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = ( { setOut, out, data, setData } ) => {
    const [show, setShow] = useState(false)
    const [reg, setReg] = useState(false)


return (
    <>
        <div className={styles.header}>
                <Link to='/'><button className={styles.btn}>Home</button></Link>
                <Link to='/message'><button className={styles.btn}>Message</button></Link>
                <Link to='/profile'><button className={styles.btn}>Profile</button></Link>


            <div className={styles.headerReg}>
                {!show && !reg ? <button onClick={()=> show? setShow(false) : setShow(true)} className={styles.btn}>Регистрация</button> : <></>}
                {show && <Reg setReg={setReg} setShow={setShow} setOut={setOut} setData={setData} data={data}/>}
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