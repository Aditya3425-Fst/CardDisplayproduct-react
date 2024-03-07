import React,{useEffect, useState} from 'react'
import axios from 'axios'
import styles from './App.module.css'

export default function App() {
  const[data,setData]=useState([]);
  useEffect(()=>{
    async function fetchData (){
      let response = await axios.get('https://dummyjson.com/products');
      setData(response.data.products)
      console.log(response)
    }
    fetchData();
   
  },[])
  return (
    <>
      {
        data.map((value,index)=><ul key={index}><li>
          <div className={styles.container}>
              <img src={value.thumbnail} className={styles.img} alt="..."/>
                <div className={styles.body}>
                  <h5 className={styles.title}>{value.title}</h5>
                  <p className={styles.text}>{value.description}</p>
                  <p className={styles.price}>price-{value.price}</p>
                  
                 <button className={styles.button}>Buy</button>
                </div>
            
            </div></li></ul>)
      }
    </>
  )
}
