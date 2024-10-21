import video from "../images/0001-0110.mp4";
import React from "react";
import "../pages/styles/backgroundvideo.css";

function BackgroundVideo(){
    return(
        <div className="bgvideo">
            <video autoPlay muted loop>
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    )
}

export default BackgroundVideo;