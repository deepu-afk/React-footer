import React from "react";
import './footer.css';
import facebook from '../assets/fbimg.png';
import twitter from '../assets/twitterimg.png';
import linkedin from '../assets/linkedinimg.png';
import insta from '../assets/instaimg.png';
import whatsapp from '../assets/whatsappimg.png';

const footer=()=>{
    return (
        <div className="Footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                    <h4>About</h4>
                        <a href="/">
                            <p>Home</p>
                        </a>
                        <a href="/services">
                            <p>Services</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                    <h4>Connect with us</h4>
                        <a href="">
                        <p>Phone Number</p>
                        </a>
                        <a href="">
                        <p>Email us</p>
                        </a>
                        <a href="/resource">
                            <p>Resources</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                    <h4>Usefull Links</h4>
                        <a href="https://linktr.ee/ipu.gogo">
                            <p>LinkTree</p>
                        </a>
                    </div>
                </div>
                <hr></hr>
                <div className="sb__footer-below">
                    <p>StudCom CopyRight@{new Date().getFullYear() }</p>
                </div>
                <div className="sb__footer-links-div">
                        <div className="socialmedia">
                        <a href="https:/instagram.com">
                            <p><img src={insta}     width="40" height="32" alt=""/></p>
                        </a>
                        <a href="https:/whatsapp.com">
                            <p><img src={whatsapp}  width="40" height="32" alt=""/></p>
                        </a>
                        <a href="https:/facebook.com">
                            <p><img src={facebook}  width="40" height="32" alt=""/></p>
                        </a>
                        <a href="https:/linkedin.com">
                            <p><img src={linkedin}  width="40" height="32" alt=""/></p>
                        </a>
                        <a href="https:/twitter.com">
                            <p><img src={twitter}   width="40" height="32" alt=""/></p>
                        </a>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default footer;