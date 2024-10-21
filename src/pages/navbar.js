import React, {useState, setState} from "react";
import menuIcon from "../images/icons8-menu-100.png";
import shoppingcart from "../images/icons8-shopping-cart-90.png";
import "./styles/navbarstyle.css";
import {Link} from "react-router-dom";
import logo from "../images/shortlogo.png";
import cross from "../images/icons8-cross-100.png";
function Navbar(){
    const [isOpen, menuToggle] = useState(false);
    const toggleMenu = () => {
            menuToggle(!isOpen);
    }
    
    return(
        <div className="navbar">
            <img src={menuIcon} onClick={toggleMenu} className="icon" alt="menuicon"/>
            <div className={`menubar ${isOpen ? 'visible' : 'invisible'}`}>
                <img src={cross} className="icon" onClick={toggleMenu}/>
                <a href="/">T-SHIRTS</a>
                <a href="/notfound">HOODIES</a>
                <a href="/notfound">ACCESORIES</a>
                <hr/>
                <a href="/aboutus">ABOUT US</a>
                <a href="/notfound">CONTACT</a>
                <a href="/notfound">COLLABO</a>
                <a href="/notfound">NEWSTELLER</a>
                <hr/>
                <a href="https://www.instagram.com/chromanticbrand/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" className="socials">INSTAGRAM</a>
                <a href="https://www.instagram.com/chromanticbrand/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" className="socials">FACEBOOK</a>
                <a href="https://www.instagram.com/chromanticbrand/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" className="socials">TWITTER</a>
            </div>  
            <Link to="/">
                <img className="icon" src={logo}/>
            </Link>
            <Link to="/cart">
            <img src={shoppingcart} className="icon" alt="shoppingcart"/>
            </Link>
        </div>
    );
}

export default Navbar;