import React from 'react';
import './body.css';
import Img1 from '../../assets/me.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Resume from '../../assets/resume.png'


const Body = () => {
  return (
    <div id="Home" className="body">
      <img src={Img1} alt="Description of image" width="200px" />
      <h2><span>I'm Boddu Subramanyam </span>, Mern-Stack Developer In India.</h2>
      <p> To leverage my full stack development skills in creating innovative, efficient, and scalable web applications while continuously learning and adapting to emerging technologies and industry trends. </p>
        <div className="body-action">
            <div className="body-connect"><AnchorLink className="anchor_link" offset={50}  href="#Contact"> Contact me</AnchorLink></div>
            
            <a  href={Resume} download="developer resume" className="resume">My Resume</a>
            

        </div>
    </div>
  );
}

export default Body;
