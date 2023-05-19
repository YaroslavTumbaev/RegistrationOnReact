import React, { useState, useContext } from 'react'
import styles from './Reg.module.css'
import Input from '../Input/Input'
import Btns from '../Buttons/Btn'

const Reg = ({ setShow, setOut, setReg}) => {


  const [error, setError] = useState(false)
  const [ready, setReady] = useState(false)


  return (
    <>
        <div className={styles.container}>
          {ready && <div className={styles.ready}>Готово! Нажмите на кнопку "Зарегестрироваться".</div>}
          {error && <div className={styles.error}>Один из обязательных полей пуст либо не содержит нужной информации.</div>}
          <Input setError={setError} setReady={setReady}/>
          <Btns setOut={setOut} setReg={setReg} setShow={setShow} setError={setError}/>
        </div>
    </>
  )
}
export default Reg