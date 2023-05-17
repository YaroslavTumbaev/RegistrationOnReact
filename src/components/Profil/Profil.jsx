import React from 'react'
import styles from './Profile.module.css'


const Profile = ( { out, data} ) => {
let pass = ''

return (
    <>
     <div className={styles.profile}>
        {!out ? 
        <div className={styles.text}>У вас пока нет профиля пожалуйста<b> Зарегистрируйтесь</b>!</div>
         :
         <div className={styles.container}>
            <div className="text">Имя: {data.name}</div>
            <div className="text">Еmail: {data.email}</div>
            <div className="text">Пароль: {data.password.split('').forEach(e => pass += '*')}
            {pass}
            </div>
         </div>
         }
        </div>
    </>
)
}
export default Profile