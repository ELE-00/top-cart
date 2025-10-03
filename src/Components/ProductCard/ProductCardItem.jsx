import React, { StrictMode } from 'react';
import './ProductCardItem.css'
import { useState } from 'react'
import {useOutletContext} from "react-router"
import carticon from '../../assets/carticon.png';


function CardItem({item}) {

    const { handleToCart } = useOutletContext();

    const [quantity, setQuantity] = useState(0)

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
        <div className="itemCard">
            <img src={item.image} alt='' className="productImage"/>
            <div className={"details"}>
                <div className="prodTitleWrapper">
                    <h3>{item.title}</h3>
                </div>        
                <div className="prodPriceWrapper">
                    <p aria-label='product price'>
                    {item.price} <span>$</span>
                    </p>
                
                    <form className="quantityForm" onSubmit={(e) => e.preventDefault() }>
                        <button className="quantityBtn" onClick={(e) => {e.preventDefault(); handleQuantityDecrease() }}>-</button>
                        <input type="number" placeholder={quantity} onChange={(e) => setQuantity(Number(e.target.value))}></input>
                        <button className="quantityBtn" onClick={(e) => {e.preventDefault(); handleQuantityIncrease() }}>+</button>
                        <button className="addToCartBtn" onClick={() => handleToCart(item, quantity)}>
                        <img src={carticon} alt="carticon" className="cartIcon" />
                        </button>
                    </form>
                </div>
            </div>

        </div>

    );
};


export default CardItem;




