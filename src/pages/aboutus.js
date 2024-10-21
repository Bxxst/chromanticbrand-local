import React, {useState} from "react";
import Navbar from "./navbar";
import {createRoot} from "react-dom";
import "./styles/aboutusstyle.css"
import testimage from "../images/aboutUs.jpg"
import video from "../images/0001-0110.mp4";
//import testimage from "../images/chromantic-aboutus.png"

function Aboutus(){
    return(
        <div>
            <Navbar/>
            <div className="grid">
                <div className="aboutusImage">
                    <img src={testimage} alt="image"/>
                </div>
                <div className="aboutusContent">
                    <h1>About us</h1>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium scelerisque orci, quis euismod lorem tempus in. Ut mattis malesuada porta. Integer laoreet sollicitudin ornare. Pellentesque fermentum, nisi eget efficitur ultrices, purus magna congue massa, eu iaculis massa tellus non neque. Praesent congue augue non erat commodo, et vehicula velit laoreet. Donec sit amet dui eu lorem accumsan tincidunt ut id dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nunc ante, luctus ac finibus in, mattis vitae urna. Vivamus at commodo purus, id laoreet purus. Nulla bibendum porttitor magna, quis ullamcorper arcu maximus ac. Nulla molestie feugiat vulputate</p>
                    <hr/>
                </div>
            </div>
            <div className="bgvideo">
                <video autoPlay muted loop>
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}

export default Aboutus;