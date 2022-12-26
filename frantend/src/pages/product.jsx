import styles from "../styles/Product.module.css"
import {filter, Image} from "@chakra-ui/react"
import { useState } from "react";
import {Link, useNavigate, useParams} from "react-router-dom"
import {data} from "../Components/Pizzadata"
import datacart from "../Components/datacart";
const Product = () => {
  // console.log(ele)
  const navigate=useNavigate()

  const {id}=useParams()
  console.log(id.split("_").join(" "))
  const Title=id.split("_").join(" ")
 
  const value = data.find((el)=>el.title===Title)
  

  console.log(value)
  

  
  
  const [size, setSize] = useState(0);
  const[cat,setcat]=useState([])
  
  const addtocart=()=>{
    value.size=size
    value.category=cat
    console.log(value)
    datacart.push(value)
    console.log(datacart)
    navigate("/cart")
    

  }

  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  };

  return (
    <div className={styles.container} >
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={value.image} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{value.title}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{value.dis}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="cheese"
              name="cheese"
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="spicy"
              name="spicy"
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="garlic"
              name="garlic"
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity}/>
            <button className={styles.button} onClick={()=>addtocart()} >Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
