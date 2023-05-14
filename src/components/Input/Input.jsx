import React from 'react'
import styles from './Input.module.css'


const Input = ( { data, setData, setReady, setError } ) => {
    const fn = () => {
    if (data.email.includes('@gmail.com') && data.password.length >= 7 && data.email) {
        setReady(true)
        setError(false)
        }
    }

return (
    <>
     <div className={styles.inputs}>
            <input className={styles.Input} placeholder='Email' onChange={e => {
                setData(prev => ({...prev, email: e.target.value}))
                fn()
            }} value={data.email}/>

            <input className={styles.Input} placeholder='Name' onChange={e => {
                setData(prev => ({...prev, name: e.target.value}))
                fn()
            }} value={data.name}/>

            <input className={styles.Input} placeholder='Password' onChange={e => {
                setData(prev => ({...prev, password: e.target.value}))
                fn()
            }} value={data.password}/>
     </div>
    </>
)
}
export default Input