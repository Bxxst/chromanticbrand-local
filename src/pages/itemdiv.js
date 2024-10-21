import React from "react";
import "./styles/itemstyle.css"

import {Link} from "react-router-dom";

function Item({item}){
    if(!item){
        return <div>no item found :(</div>
    }

    return(
        <div className="itemContainer" key={item.id}>
            <Link to={`/item/${item.id}`}>
                <div className="photo">
                    <img className="itemImage" src={item.image} alt="item photo"/>
                </div>
                <div className="info">
                    <h3>{item.name}</h3>
                    <p>$ {item.price}</p>
                </div>
            </Link>
        </div>
    )
}

export default Item;