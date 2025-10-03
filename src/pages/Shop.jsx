import React, { StrictMode } from 'react';
import { useState, useEffect } from "react";
import ProductCardItem from "../Components/ProductCard/ProductCardItem.jsx"
import './Shop.css'

const Shop = () => {

    const [productData, setProductData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("error loading data");
            }
            return response.json()
        })
        // .then(data => console.log(data))
        .then(data => {setProductData(data), setFilteredData(data)})
        .catch((error) => setError(error))
        .finally(() => setLoading(false));

    }, []);


    function handleBtnFilter(filter) {
        console.log("filter received " + filter)
        const arr = productData;
        const newArray = arr.filter(item => item.category === filter)
        setFilteredData(newArray);

    }



    return(
        < div className="shopWrapper">
            <div className="filterContainer">
                <button className="filtertn" onClick={() => handleBtnFilter("men's clothing")}>MEN</button>
                <button className="filtertn" onClick={() => handleBtnFilter("women's clothing")}>WOMEN</button>
                <button className="filtertn" onClick={() => handleBtnFilter("jewelery")}>JEWELERY</button>
                <button className="filtertn" onClick={() => handleBtnFilter("electronics")}>ELECTRONICS</button>

            </div>
            <div className="productGrid">
                {filteredData.map(item => (
                    <ProductCardItem key={item.id} item={item} />
                ))}                       
            </div>
        </div>
    );
};


export default Shop;
