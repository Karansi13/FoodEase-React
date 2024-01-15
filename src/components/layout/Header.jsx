import React from 'react'
import { IoFastFoodOutline } from "react-icons/io5"
import { FiShoppingCart, FiLogIn } from "react-icons/fi"
import { FaUser } from "react-icons/fa"
import { Link } from 'react-router-dom'
import "../../styles/header.scss"
import { motion } from "framer-motion"

const Header = ({ isAuthenticated = false}) => {
  return (
    <nav>
        <motion.div
        initial={{ y: "-100%"}} whileInView={{ y: 0 }}
        >
            <IoFastFoodOutline />
        </motion.div>

        <div>
            <Link to="/">Home</Link> 
            <Link to="/contact">Contact</Link> 
            <Link to="/about">About</Link> 
            <Link to="/cart">
                <FiShoppingCart />
            </Link> 

            <Link to={isAuthenticated ? "/me" : "/login"}>
                {isAuthenticated ? <FaUser/> : <FiLogIn/>}
            </Link>
        </div>
    </nav>
  )
}

export default Header
