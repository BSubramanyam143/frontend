import React from 'react';
import './navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = () => {

 return (
    <div className="navbar">
    <h2>Mern-stack<span> Developer</span></h2>
  
  
    <ul className='nav-menu'>

        <li><AnchorLink className="anchor_link" offset={50}  href="#Home">Home</AnchorLink></li>
        <li><AnchorLink className="anchor_link" offset={50}  href="#About">About me</AnchorLink></li>
        <li><AnchorLink className="anchor_link" offset={50}  href="#Skills">Skills</AnchorLink></li>
        <li><AnchorLink className="anchor_link" offset={50}  href="#Projects">Projects</AnchorLink></li>
        <li><AnchorLink className="anchor_link" offset={50}  href="#Contact"> Contact</AnchorLink></li>
    </ul>
    <div className="nav-connect"><AnchorLink className="right_button" offset={50}  href="#Contact"> Contact me</AnchorLink></div>
    </div>
  )
}

export default Navbar;