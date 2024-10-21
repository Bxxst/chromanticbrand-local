import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/additem.css";

function EditItem(){
    const navigate = useNavigate();

    const [isError, setIsError] = useState(false);
    const [prodName, setProdName] = useState("");
    const [prodPrice, setProdPrice] = useState();
    const [prodDesc, setProdDesc] = useState("");
    const [base64String, setBase64String] = useState();

    const [item, setItem] = useState('');
    const {id} = useParams();

    const edit = () => {
        fetch(`http://130.61.72.246:8080/shop/api/items/edit`, {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                name: prodName,
                description: prodDesc,
                image: base64String,
                currentPrice: prodPrice,
                normalPrice: 22,
            }),
        })
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error('Error', error));
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
        //console.log(base64String);
        }
    }

    const findItem = () => {
        fetch("http://130.61.72.246:8080/shop/api/items/find?id=" + id, {
            method: 'GET',
          })
            .then(response => response.json())
            .then(data => setItem(data))
            .catch(error => console.error('Error:', error));
    }

    useEffect(() => {
        findItem();
      }, [])

      return(
        <div>
            <div className="additemform">
            <h2>Edit Item</h2>
            <p>Product name</p>
                <input type="text" id="productname" placeholder={item.name} onChange={(event) => {setProdName(event.target.value)}}></input>
                <p>Product price</p>
                <input type="number" id="productprice" placeholder={item.currentPrice} onChange={(event) => {setProdPrice(event.target.value)}}></input>
                <p>Product description</p>
                <textarea id="productdescription" placeholder={item.description} onChange={(event) => {setProdDesc(event.target.value)}}></textarea>
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
                        navigate("/adminpage");
                        edit();
                    }
    
                }} value={"submit"}></input>
            </div>
        </div>
        )
}

export default EditItem;