import React from 'react'
import styles from './Btn.module.css'

const Btns = ( { setShow, setReg, setOut, setError, data } ) => {


    const send = () => {
        if (data.email.includes('@gmail.com') && data.password.length >= 8 && data.name) {
            setOut(true)
            setReg(true)
            setShow(false)
            alert(`Вы зарегистрировались под именем "${data.name}"`)
            }else {
            setError(true)
        }
    }

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