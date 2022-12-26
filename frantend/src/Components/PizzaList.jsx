import React from 'react'
import Styles from "../styles/PizzaList.module.css"
import PizzaCard from './PizzaCard'
const PizzaList = () => {
  return (
    <div className={Styles.container}>
        <h1 className={Styles.title}>The Best Pizza in Town </h1>
        <p className={Styles.desc}>
            Since 2000 , we are here and service the best pizza at affordable price.
        </p>
        <div className={Styles.wrapper}>
            <PizzaCard/>
        </div>
    </div>
  )
}

export default PizzaList