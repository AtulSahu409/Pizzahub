
import {Button, Image} from "@chakra-ui/react"
import React from 'react'
import Styles from "../styles/PizzaCard.module.css"
import {data} from "./Pizzadata"
import {Grid, GridItem, Heading} from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom";

const PizzaCard = () => {

  const navigate=useNavigate()

  const handleclick=(id)=>{
    console.log(id)
    navigate(`product/${id.split(" ").join("_")}`)
  }
  // console.log("da",nodedata)
  return (
    
    <div className={Styles.container}>
    <Grid templateColumns={"repeat(4,1fr)"} gap={20}>
    {data && data.length>0 && data.map((el, index)=>{
      return (
        <GridItem alignItems={"center"} justifyContent="center" key={index}>
        <Image src={el.image} alt="" width="200" height="200"  />
        <Heading size={"sm"} className={Styles.title}>{el.title}</Heading>
        <span className={Styles.price}>{el.price}</span>
        <Button onClick={()=>handleclick(el.title)}>Order NOW</Button>
        {/* <p className={Styles.desc}>
            {el.dis}
        </p> */}
        </GridItem>

      )
    })}
    </Grid>
        
    </div>
  )
}

export default PizzaCard