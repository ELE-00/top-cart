import React, { StrictMode } from 'react';
import  heroimage from '../assets/heroimage.jpg';
import {Link} from "react-router";
import './Homepage.css'


const Homepage = () => {


    return(
        <div className="homepageWrapper">
            <div className="heroImageWrapper">
                <img src={heroimage} alt="heroimage.jpg" className='heroimage'/>
            </div>
            <div className="homeContentWrapper">
                <h2>Discover quality products at great prices — handpicked to make your everyday life better.</h2>
                <p>Whether you’re looking for the latest essentials, timeless favorites, or something special, our store has you covered. We focus on delivering products you’ll love, with a shopping experience that’s simple, fast, and secure.</p>
                
                <Link to="shop" >
                <p className="shopLink">Start shopping today and find what inspires you!</p> 
                </Link> {" "}   
            </div>
        </div>
    );
};


export default Homepage;
