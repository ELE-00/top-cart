import React, { StrictMode } from 'react';
import { useState } from 'react'
import logo from './assets/logo.png';
import {Link} from "react-router";
import './App.css'
import { Outlet } from "react-router";

function App() {
  
  const [cart, setCart] = useState([]);

function handleToCart(item, quantity) {

  const qty = Number(quantity); // ensure it's a number

  const existingItem = cart.find(cartItem => cartItem.id === item.id);

  if (existingItem) {
    // update quantity for existing item
    const newCart = cart.map(cartItem => 
      cartItem.id === item.id
        ? { ...cartItem, quantity: qty }
        : cartItem
    );
    setCart(newCart);
  } else {
    // add new item with quantity
    const itemWithQuantity = { ...item, quantity: qty };
    setCart(prev => [...prev, itemWithQuantity]);
  }
}

  function removeFromCart(item){

    const itemToRemove = cart.find(cartItem => cartItem.id === item.id);

    if(itemToRemove){
      const updatedCart = cart.filter(item => item !== itemToRemove)
      setCart(updatedCart);
    }else{
      console.log("no item found")
    }
    
  };

  console.log("current cart: " + cart.length)
  // function removefromCart(item){};

  return (
    <div className="wrapper">
      <div className="navbar">
        <Link to="/" >
          <img src={logo} alt="emerisse" className='logo'/>
        </Link> {" "}   
        <nav>
          <Link to="/">Home</Link> {" "}         
          <Link to="shop">Shop</Link> {" "}
          <Link to="cart">Cart <span>( </span>{cart.length}<span> )</span></Link> 
        </nav>
        
      </div>
    
      <div className="contentSection">     
        <Outlet context={{cart, handleToCart, removeFromCart}} />
      </div>
    
    </div>

  )
}

export default App
