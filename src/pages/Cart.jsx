import React, { StrictMode } from 'react';
import { useState, useEffect } from "react";
import CartCardItem from "../Components/CartCard/CartCardItem.jsx"
import './Cart.css'
import {useOutletContext} from "react-router"

const Cart = () => {

    const { cart } = useOutletContext();

    console.log(cart);

    return(
        <>
            <div className="CartfilterContainer">
            </div>
            <div className="CartproductGrid">
                {cart.map(cartItem => (
                    <CartCardItem key={cartItem.id} item={cartItem} />
                ))}                       
            </div>
        </>
    );
};

export default Cart;