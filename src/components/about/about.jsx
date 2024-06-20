import React from 'react';
import './about.css';

import myimg from '../../assets/copy.jpg';

const About = () => {
  return (
    <div id="About" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <hr></hr>
         </div>
      <div className="about-section">
        <div className="about-left">
          <img src={myimg} alt="Profile" width="250px" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>"As a motivated and passionate fresher with a solid foundation in web development, I am eager to start my career as a MERN stack developer. I aim to leverage my knowledge in MongoDB, Express.js, React.js, and Node.js to build scalable and efficient web applications. With a keen eye for detail, strong problem-solving skills, and a commitment to continuous learning, I aspire to contribute to dynamic development teams and help deliver innovative solutions that enhance user experiences and drive business success."

</p>
      
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>M.C.A</p><hr style={{width: "89%"}} />CGPA:8.9</div>
            <div className="about-skill"><p>Degree(Bsc)</p><hr style={{width: "78%"}} />CGPA:7.84</div>
            <div className="about-skill"><p>Inter(MPC)</p><hr style={{width: "79%"}} />Marks:794</div>
            <div className="about-skill"><p>S.S.C</p><hr style={{width: "75%"}} />Gpa:7.5</div>
            
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Experience</h1>
          <p>Fresher</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>Projects</h1>
          <p>01</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>More</h1>
          <p>Got NCC (A) certificate  in 2014. </p>
          <p>Got the certificate  from kaluvoya Mandal Rural Competitions (Kho-Kho winners) </p>
          <p>Got the certificate  from  94th Grigg Memorial Tournaments 2014-15(Hockey Merit certificate ) </p>
          <p>Got the certificate  from BHARATIYA SANSKRITI GYAN PARIKSHA IN 2012.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
