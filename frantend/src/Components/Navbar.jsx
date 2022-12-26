import {Image} from "@chakra-ui/react"
import React from 'react'
import  Styles from "../styles/Navbar.module.css" 
import tele from "../img/telephone.png"
import logo from "../img/logo.png"
import cart from "../img/cart.png"
const Navbar = () => {
  return (
    <div className={Styles.container}>
    <div className={Styles.item}>
    <div className={Styles.callButton}>
      <Image width={"32"} height="31" src={tele} alt="telephone" ></Image>
    </div>
    <div className={Styles.texts}>
    <div className={Styles.text}>ORDER NOW</div>
    <div className={Styles.text}>799 145 4015</div>

    </div>
    

    </div>
    <div className={Styles.item}>
      <ul className={Styles.list}>
      <li className={Styles.listItem}>HomePage</li>
      <li className={Styles.listItem}>Products</li>
      <li className={Styles.listItem}>Menu</li>
      <Image src={logo}  width="160" height="69" alt="telephone" />
      <li className={Styles.listItem}>Events</li>
      <li className={Styles.listItem}>Blog</li>
      <li className={Styles.listItem}>Contact</li>
      </ul>
    </div>
    <div className={Styles.item}>
    <div className={Styles.cart}>

    <Image src={cart} width="30" height="30" alt="telephone" />
    <div className={Styles.counter}>
      2
      </div>
    </div>

    </div>
    </div>


  )
}

export default Navbar
