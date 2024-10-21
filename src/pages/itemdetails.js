import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Notfound from "./notfound";
import Navbar from "./navbar";
import "./styles/itemdetails.css"
import iron from "../images/iron-100.png";
import clothesline from "../images/clothes-line-100.png"
import washingmachine from "../images/washing-machine-100.png"
import BackgroundVideo from "./backgroundvideo";
import sizechart from "../images/Oversized Tshirts Size Guide.png";

import { items } from "./mainpage";

function ItemDetails (){
    const {id} = useParams();
    const item = items.find((item) => item.id === parseInt(id));

    function addToCart(product) {
        let cartData = localStorage.getItem('cart');
        let cart = cartData ? JSON.parse(cartData) : [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(localStorage);
        alert("Produkt dodany do koszyka");
    }

    return(
        <div>
            <Navbar/>
            <div className="grid-row-2">
                <div><img src={item.image} alt={item.name}/></div>
                <div className="itemcontent">
                    <h2>{item.name}</h2>
                    <p className="itemprice">${item.price}</p>
                    <p className="description">
                        {item.description}
                    </p>
                    <button className="button" onClick={() => addToCart(item)}>Add to cart</button>
                </div>
            </div>
            <div className="verticalflex">
                <h2>SIZE CHART</h2>
                <p>Explore our convenient size chart to ensure that your sweatshirt fits you just right. We've designed it with precision and comfort in mind, so you can enjoy not only great style but also an impeccable fit. Our sweatshirts are carefully crafted, and the size chart will help you find the right size, ensuring satisfaction with your purchase.
                <br/><br/>Please note that the measurements provided in the chart are garment dimensions, not body measurements. For the most accurate fit, we recommend measuring your own dimensions and comparing them to our chart. If you have any size-related questions, our customer service team will be happy to assist you. We strive to ensure that every customer can feel confident and stylish in our unique sweatshirts.</p>
                <img src={sizechart} alt={"size chart"} style={{mixBlendMode: "difference"}}/>
                <h2>HOW TO PROPERLY TREAT OUR PRODUCTS</h2>
                <div className="productTreating">
                    <div>
                        <img src={washingmachine}/>
                        <ul>
                            <li>Wash your white T-Shirt at 30 or 40 degrees, T-Shirt does not like heat</li>
                            <li>Wash your T-Shirt on the "inside out"</li>
                            <li>Wash with similar colours to prevent getting coloured by another garment.</li>
                        </ul>
                    </div>
                    <div>
                        <img src={clothesline}/>
                        <ul>
                            <li>Do not tumble dry</li>
                            <li>Use only clothing lines</li>
                            <li>Make sure black T-Shirts are not exposed to a sunlight</li>
                        </ul>
                    </div>
                    <div>
                        <img src={iron}/>
                        <ul>
                            <li>Iron on reverse</li>
                            <li>Take extra care around the neckline and shoulders: you should not stretch them too much here as you don’t want the T-Shirt to lose shape</li>
                        </ul>
                    </div>
                </div>
            </div>
            <BackgroundVideo/>
        </div>
    )
}

export default ItemDetails;