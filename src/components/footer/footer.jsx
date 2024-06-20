import React from 'react'
import './footer.css'
import footer from '../../assets/footer_logo.svg'
import usericon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div id="Footer"className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>B.Subbu</h1>
                <p>i am  a full-stack developer in india.
To leverage my full stack development skills in creating innovative, efficient, and scalable web applications while continuously learning and adapting to emerging technologies and industry trends.</p>
            </div>
            </div>
           <hr />
     <div className="footer-bottom">
        <div className="footer-bottom-left"><span>@2024</span> subbu. All right reserved.</div>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Contact me</p>
        </div>
     </div>
    </div>
  )
}

export default Footer;
