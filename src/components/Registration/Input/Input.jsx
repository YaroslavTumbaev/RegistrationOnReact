import styles from './Input.module.css'
import React, { useContext } from 'react'
import { myContext } from '../../Router'


const Input = ( { data, setData, setReady, setError } ) => {
    const fn = () => {
        if (context.data.email.includes('@gmail.com') && context.data.password.length >= 7 && context.data.email) {
            setReady(true)
            setError(false)
        }
    }

    const context = useContext(myContext)

return (
    <>
     <div className={styles.inputs}>
            <input className={styles.Input} placeholder='Email' onChange={e => {
                context.setData(prev => ({...prev, email: e.target.value}))
                fn()
            }} value={context.data.email}/>

            <input className={styles.Input} placeholder='Name' onChange={e => {
                context.setData(prev => ({...prev, name: e.target.value}))
                fn()
            }} value={context.data.name}/>

            <input className={styles.Input} placeholder='Password' onChange={e => {
                context.setData(prev => ({...prev, password: e.target.value}))
                fn()
            }} value={context.data.password}/>
     </div>
    </>
)
}
export default Input