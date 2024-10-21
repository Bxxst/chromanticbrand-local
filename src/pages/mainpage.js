import React from "react";
import Navbar from "./navbar";
import "./styles/mainpagestyle.css";
import { useState, useEffect } from "react";

import BackgroundVideo from "./backgroundvideo";
import Item from "./itemdiv";

export const items = [
  {id: 1, name: "T-SHIRT MONOCHRXME COLLECTION", price: 100, image: require("../images/tshirts/monochrome.png"), description: "Czarno-biała bluzka T-shirt o luźnym kroju. Materiał 100% bawełna, wzór oraz krój oryginalny, zaprojektowany przez naszą wytwórnie."},
  {id: 2, name: "T-SHIRT LOST SOUL COLLECTION", price: 100, image: require("../images/tshirts/lostsoul.png"), description: "Czarno-biała bluzka T-shirt o luźnym kroju. Materiał 100% bawełna, wzór oraz krój oryginalny, zaprojektowany przez naszą wytwórnie."},
  {id: 3, name: "T-SHIRT PAINKILLER COLLECTION", price: 100, image: require("../images/tshirts/painkiller.png"), description: "Czarno-biała bluzka T-shirt o luźnym kroju. Materiał 100% bawełna, wzór oraz krój oryginalny, zaprojektowany przez naszą wytwórnie."},
  {id: 4, name: "T-SHIRT THORNS COLLECTION", price: 150, image: require("../images/tshirts/thorns.png"), description: "Czarno-biała bluzka T-shirt o luźnym kroju. Materiał 100% bawełna, wzór oraz krój oryginalny, zaprojektowany przez naszą wytwórnie."},
  {id: 5, name: "T-SHIRT TOKIO COLLECTION", price: 100, image: require("../images/tshirts/tokio.png"), description: "Czarno-biała bluzka T-shirt o luźnym kroju. Materiał 100% bawełna, wzór oraz krój oryginalny, zaprojektowany przez naszą wytwórnie."},
  {id: 6, name: "T-SHIRT SNOWBUNNY COLLECTION", price: 200, image: require("../images/tshirts/snowbunny.png"), description: "Czarno-biała bluzka T-shirt o luźnym kroju. Materiał 100% bawełna, wzór oraz krój oryginalny, zaprojektowany przez naszą wytwórnie."},
  {id: 7, name: "T-SHIRT INCEPTION COLLECTION", price: 150, image: require("../images/tshirts/mug.png"), description: "Czarno-biała bluzka T-shirt o luźnym kroju. Materiał 100% bawełna, wzór oraz krój oryginalny, zaprojektowany przez naszą wytwórnie."}
]

function Mainpage(){
    return(
        <div>
           <Navbar/>
           <div className="container">
           {items.length > 0 && (
               items.map(item => (
                   <Item item={item}></Item>
                   // <div key={item.id}>
                   //      <Link to={`/item/${item.id}`}>
                   //          <img src={item.image} style={{maxWidth: "100%"}} alt={"item image"}/>
                   //          <h3 style={{color: "white"}}>{item.name}</h3>
                   //          <p style={{color: "gray"}}>${item.price}</p>
                   //      </Link>
                   // </div>)
               ))
            )}
            </div>
            <BackgroundVideo/>
        </div>
    )
}

export default Mainpage;