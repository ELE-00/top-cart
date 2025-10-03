import React, { StrictMode } from 'react';
import './CartCardItem.css'
import { useState } from 'react'
import {useOutletContext} from "react-router"
import trash from '../../assets/trash.png';
import carticon from '../../assets/carticon.png';


function CardItem({item}) {

    const { handleToCart, removeFromCart } = useOutletContext();

    const [quantity, setQuantity] = useState(item.quantity)


    function handleQuantityIncrease() {
        setQuantity(quantity + 1)
    }

    function handleQuantityDecrease() {
        if(quantity === 0){
            return
        }else {
            setQuantity(quantity - 1)    
        }
    };

    return(
        <div className="CartItemCard">
            <img src={item.image} alt='' className="CartProductImage" />
            <div className={"Cartdetails"}>
                <h3>{item.title}</h3>
                <p aria-label='product price'>
                <span>Total: </span>{item.price * item.quantity} <span>$</span>
                </p>
                <form className="CartquantityForm" onSubmit={(e) => e.preventDefault() }>
                    <button className="cartQuantityBtn" onClick={(e) => {e.preventDefault(); handleQuantityDecrease() }}>-</button>
                    <input type="number" placeholder={quantity} onChange={(e) => setQuantity(Number(e.target.value))}></input>
                    <button className="cartQuantityBtn" onClick={(e) => {e.preventDefault(); handleQuantityIncrease() }}>+</button>
                    <button className="addToCartBtn" onClick={() => handleToCart(item, quantity)}>
                    <img src={carticon} alt="carticon" className="cartIcon" />
                    </button>
                    <img src={trash} alt="trash" className="trashIcon" onClick={() => removeFromCart(item)} />
                </form>

            </div>

        </div>

    );
};


export default CardItem;




