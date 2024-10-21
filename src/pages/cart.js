import React, { useState, useEffect } from "react";
import Navbar from "./navbar";

function Cart() {
    const [cart, setCart] = useState([]);

    // Ładowanie koszyka przy zamontowaniu komponentu
    useEffect(() => {
        loadCart();
    }, []);

    // Funkcja do załadowania zawartości koszyka
    function loadCart() {
        let cartData = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cartData);
    }

    // Funkcja usuwająca produkt z koszyka
    function removeFromCart(index) {
        let cartData = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Usuń produkt z tablicy
        cartData.splice(index, 1);
    
        // Zaktualizuj localStorage
        localStorage.setItem('cart', JSON.stringify(cartData));
    
        // Zaktualizuj stan koszyka
        setCart(cartData);
    }

    return (
        <div>
            <Navbar />
            <h1 style={{ textAlign: "center" }}>Cart</h1>
            
            <div style={{marginInline: "auto", display: 'flex', flexDirection: "column", width: 60 + "%", gap: '20px', padding: '20px' }}>
                {cart.length === 0 ? (
                    <p style={{ color: "white", textAlign: "center" }}>Your cart is empty.</p>
                ) : (
                    cart.map((cartItem, index) => (
                        <div key={cartItem.id} style={{ 
                            display: "flex", 
                            alignItems: "center", 
                            justifyContent: "space-between", 
                            height: "200px", 
                            width: "auto", 
                            backgroundColor: "#222", 
                            gap: "30px", 
                            padding: '5px', 
                            borderRadius: '8px' 
                        }}>
                            <img src={cartItem.image} style={{ maxHeight: "100%", objectFit: "contain" }} alt={cartItem.name} />
                            <div>
                            <h3 style={{ color: "white" }}>{cartItem.name}</h3>
                            <p style={{ color: "gray" }}>${cartItem.price}</p>
                            </div>
                            <button 
                                onClick={() => removeFromCart(index)} 
                                style={{ 
                                    backgroundColor: "white", 
                                    color: "black", 
                                    padding: "10px 20px",
                                    borderRadius: "5px", 
                                    fontWeight: "bold",
                                    border: "none", 
                                    cursor: "pointer", 
                                    marginLeft: "auto", 
                                    marginRight: "10px"
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Cart;
