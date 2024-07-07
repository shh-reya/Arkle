import React from "react";
import Logo from '../assets/arkle.png';
import './Footer.css'
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";


function Footer(){
    return(  
        <div className="footer flex">
            <div className="div1">
                <Link to='/'><img src={Logo} alt="arklelogo" style={{width:'90px', marginLeft:'20px',marginBottom:'-20px'}}/></Link>
                 <h5>Power of Relevance</h5>
                 <div className="icon-2 flex">
                 <a href='https://www.facebook.com/' target="_blank"><i class="fa-brands fa-facebook"></i></a>
                 <a href='https://www.instagram.com/' target="_blank"><i class="fa-brands fa-instagram"></i></a>
                 <a href='https://www.twitter.com/' target="_blank"><FaXTwitter color="white"/></a>
                 <a href='https://www.linkedin.com/company/arkle-consultancy-pvt-ltd/mycompany/' target="_blankm"><i class="fa-brands fa-linkedin"></i></a>
                 </div>
                 </div>
            <div className="div1"><h6>Contact Details</h6>
            <i class="fa-solid fa-location-dot"></i>J-18, Bapuji Marg, Sahkar Marg, Jaipur, Rajasthan 302005, IN<br></br>
            <i class="fa-solid fa-phone"></i> +91 8107998081
            </div>
            <div className="div1" style={{paddingRight:'20px'}}>
                <h6>Important Links</h6>
                Privacy Policy<br></br>
                Terms and Conditions
            </div>
        </div>
    )
}


export default Footer;