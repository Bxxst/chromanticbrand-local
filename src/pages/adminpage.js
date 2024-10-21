import React from "react";
import {items} from "../App";
import { Link, useParams } from "react-router-dom";
import "./styles/adminpage.css";
import { useState, useEffect } from "react";

const AdminPage = () =>{
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)
  
    const fetchData = () => {
      setIsLoading(true)
      fetch("http://130.61.72.246:8080/shop/api/items")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setIsLoading(false)
          setItems(data)
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])

    return(
        <div style={{display: "flex", flexDirection: "column", gap: "10px", width: "80%", marginInline: "auto"}}>
            <h1>Item List</h1>
            <Link to={"/adminpage/additem"}><button className="additem">Add item</button></Link>
            {isLoading && <p>Loading...</p>}
            {items.length > 0 && (
            items.map(item => (
                   <div className="adminListItem"  key={item.id}>
                   <Link to={`/item/${item.id}`}>
                       <div className="adminphoto">
                           <img className="itemImage" src={item.image} alt="item photo"/>
                       </div>
                       <div className="info">
                           <h3>{item.name}</h3>
                           <p>$ {item.currentPrice}</p>
                       </div>
                       </Link>
                       <div className="deleteBtn" onClick={() => {
              // Corrected fetch function placement
              fetch(`http://130.61.72.246:8080/shop/api/items/remove?id=${item.id}`, {
                method: "DELETE"
              })
              .then(response => {
                window.location.reload(false);
              })
            }}
          >delete</div>
               </div>
               )))}
        </div>
    );
}

export default AdminPage;