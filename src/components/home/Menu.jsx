import React from 'react'
import MenuCard from './MenuCard'
import burger1 from "../../assets/burger1.png"

const Menu = () => {

    const addToCartHandler = ({ itemNum }) => {

    }
  return (
    <section id='menu'>
        <h1>Menu</h1>

        <div>
            <MenuCard itemNum={1} burgerSrc={burger1} price={200} title="Cheese Burger" handler={addToCartHandler} delay={0.1}/>
            <MenuCard itemNum={2} burgerSrc={burger1} price={200} title="Cheese Burger" handler={addToCartHandler} delay={0.2}/>
            <MenuCard itemNum={3} burgerSrc={burger1} price={200} title="Cheese Burger" handler={addToCartHandler} delay={0.3}/>
            
        </div>
    </section>
  )
}
export default Menu
