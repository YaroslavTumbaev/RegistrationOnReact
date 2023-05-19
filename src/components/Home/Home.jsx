import React from 'react'
import { useEffect } from 'react';
import { useState, useMemo } from 'react';
import styles from './Home.module.css'

const Home = () => {
    const [data, setData] = useState(undefined)
    const a = []

    const url = 'https://sportscore1.p.rapidapi.com/sports/1/teams?page=1';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '79646905fdmsh5d161b467cf2777p1dd112jsnaf4e67cb7f24',
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        }
    };

    const func = async () => {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setData(result)
    }


    const memo = useMemo(() => func(), []);


return (
    <div className={styles.home}>
        {data && data.data.map((e, i) => (
                <div key={i} className={styles.card}>
                    <img src={e.logo} alt="постер"/>
                    <div className={styles.text}>
                    <span>{e.country_code}</span> <b>{e.name_full}</b>
                </div>
                    {e.year}
                </div>
            
        ))}
    </div>
)
}
export default Home