import React from "react";
import "./styles/additem.css"
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Additem(){
    const navigate = useNavigate();

    const [isError, setIsError] = useState(false);
    const [prodName, setProdName] = useState("");
    const [prodPrice, setProdPrice] = useState();
    const [prodDesc, setProdDesc] = useState("");
    const [base64String, setBase64String] = useState('');

    function sendItem() {
        fetch("http://130.61.72.246:8080/shop/api/items/add", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: prodName,
                description: prodDesc,
                image: base64String,
                price: prodPrice,
            }),
        });
        alert("item has been added to database")
    }

    const handleImage = (event) => {
        const file = event.target.files[0];
    
        const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
        if(!allowedTypes.includes(file?.type)){
            setIsError(true);
        } else{
            setIsError(false);
        }

        if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
            // The result property contains the base64 string
            const base64String = reader.result;
            setBase64String(base64String);
        };

        // Read the image file as a data URL
        reader.readAsDataURL(file);
        console.log(base64String);
        }
    }
    

    return(
    <div>
        <div className="additemform">
        <h2>Add item</h2>
        <p>Product name</p>
            <input type="text" id="productname" onChange={(event) => {setProdName(event.target.value)}}></input>
            <p>Product price</p>
            <input type="number" id="productprice" onChange={(event) => {setProdPrice(event.target.value)}}></input>
            <p>Product description</p>
            <textarea id="productdescription" onChange={(event) => {setProdDesc(event.target.value)}}></textarea>
            <p>Product image</p>
            <input type="file" onChange={handleImage} id="productimage"></input>
            <input type="submit" onClick={() => {
                var name = document.getElementById("productname").value;
                var price = document.getElementById("productprice").value;
                var desc = document.getElementById("productdescription").value;
                var img = document.getElementById("productimage").value;
                if(name == ''){
                    alert("name field is empty");
                } else if(price == 0){
                    alert("price cannot be equal 0")
                } else if(desc == ''){
                    alert("description field is empty");
                } else if(img == 0){
                    alert("image hadn't been added");
                } else if(isError){
                    alert("file must be an image");
                } else{
                    sendItem();
                    navigate("/adminpage");
                }

            }} value={"submit"}></input>
        </div>
    </div>
    )
}

export default Additem;