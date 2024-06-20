import React from 'react';
import './myservices.css';
import Html5 from '../../assets/html55.png';
import Css3 from '../../assets/CSS33.png';
import Bootstrap from '../../assets/bootstrap.png';
import Javascript from '../../assets/javascript.png';
import Reactjs from '../../assets/react.png';
import Nodejs from '../../assets/node.png';
import Express from '../../assets/express.png';
import Mangodb from '../../assets/mangodb.png'
import Git from '../../assets/git1.png'
import Github from '../../assets/github.png'
import Aws from '../../assets/aws.png'
const Myservices = () => {
  return (
    <div id="Skills" className="services">
      <div className="services-title">
        <h1>My Skills</h1>
        <hr />
      </div>
     
        <div className="services-container">
          <img src={Html5} alt="Html5"  width="100px" className="skills"/>
          <img src={Css3} alt="css3" width="100px" className="skills" />
          <img src={Bootstrap} alt="bootstrap" width="100px" className="skills"/>
          <img src={Javascript} alt="javascript" width="100px" className="skills" />
          <img src={Reactjs} alt="react"  width="100px" className="skills"/>
          <img src={Nodejs} alt="node.js" width="100px" className="skills"/>
          <img src={Express} alt="express.js" width="100px" className="skills"/>
          <img src={Mangodb} alt="javascript" width="100px" className="skills"/>
          <img src={Git} alt="git" width="100px" className="skills"/>
          <img src={Github} alt="github" width="100px" className="skills"/>
          <img src={Aws} alt="aws" width="100px" className="skills"/>
         
        </div>


    </div>
  )
}

export default Myservices;