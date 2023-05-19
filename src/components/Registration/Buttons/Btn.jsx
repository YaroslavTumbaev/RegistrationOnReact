import React, { useContext } from 'react'
import styles from './Btn.module.css'
import { myContext } from '../../Router'


const Btns = ( { setShow, setReg, setOut, setError } ) => {


    const send = () => {
        if (context.data.email.includes('@gmail.com') && context.data.password.length >= 8 && context.data.name) {
            setOut(true)
            setReg(true)
            setShow(false)
            alert(`Вы зарегистрировались под именем "${context.data.name}"`)
            }else {
            setError(true)
        }
    }

    const context = useContext(myContext)

return (
    <>
     <div className={styles.btns}>
        <button className={styles.sendBtn} onClick={() =>{setShow(false)}}>Отмена</button>
        <button className={styles.sendBtn} onClick={send}>Зарегестрироваться</button>
     </div>
    </>
)
}
export default Btns