import React from "react";
import Footer from "../Footer";
import './About.css'
import logo from '../../assets/photo/ab.jpg'
import Background from "../Background";
export const Industries = () => {
    return (

        <div id="aboutus">
            
            <Background url={logo} text={"Arkle : Power of Relevence!!"} subtext={' ARKLE delivers you B2B consultancy and Customized Solution to problems.'} />
            <div className="about-text">
           <center><h1 className="about-heading">ARKLE: Power of Relevance</h1></center>
         
             <p>
               ARKLE delivers you B2B consultancy and Customized Solution to problems. 
               We assist prominent businesses in setting up their websites, and assisting them further with complete cloud storage facilities. 
               To surge into current market places it is indispensable for businesses to thrive a requisite digital presence in the market for monitoring 
               and analyzing the possible opportunities, assessing the possible threats and generating overflowing revenues in the markets. 
               Being driven into the ideology of positive and healthy business markets we are delivering such vital services since 2013.
               We are a cluster of firms and Investors committed to deliver quality in- Institutional Projects, Business Consultancy and Professional Services.
               Driven by strong relationship and common business interest, we have our valued partners to undertake and deliver any assignment as per Client’s Expectations. 
            </p>

            <h3 style={{fontStyle:'bold'}}> Our Beliefs and Vision for our customers:</h3>
            <p>
             At Arkle, we believe in appropriateness, i.e., RELEVANCE. 
             We provide emerging and existing businesses with unlimited solutions with our expertise in dealing with the problems they face.
             Our team of motivated employees are driven to provide Uniform, Innovative & Customized Solutions to 
             our clients that match our client’s desires, needs and relevance, 
             hence provide our purpose ~ POWER OF RELEVANCE!
             
            
             We are consistently assisting world’s leading organizations to drive predictable revenue and 
             profitability growth by optimizing sales organization performance through our expertise in the outsourcing business.
             <p>
             Services those are 24*7 available to our customers:
              </p>

             <h3> Cloud Computing</h3>
             <p>
              ARKLE has made cloud computing at the fingertips to our clients so that they can perform
              their activities on the go with ease. The pre-requisite essential features that could assist you in the growth are:
              </p> </p>
             <ul><li><h3>Store safely</h3></li>
             <li><h3>Sync seamlessly</h3></li>
             <li><h3>Access anywhere</h3></li>
             <li><h3>Share easily</h3></li>
             <li><h3>Marketing Solutions</h3></li></ul>
             
             <p>
             In this innovative and constantly changing environment every business need to amend their strategies. So, 
             we at ARKLE assist you to survive and grow in such a hyper-changing environment.
             </p>
            <h3>Business Consultancy</h3>
            <p>
            Creative minds working with us are of a constant help in proving our clients with 
            the best advices possible and are consistently working for the service of our clients.
            </p>
            <h3>IT Based Solutions</h3>
            <p>
            The ever-growing competitive and growing digital markets and
             the assistance of IT in day to day business practices,
              ARKLE promises you with the best and the latest IT solutions.
              </p>
             <h3>Financial Services</h3>
             <p>
            ARKLE is serving you along with numerous investors to provide with essential financial services to the
             developing businesses in order to reach potential limits of growth and success.
             </p>
             <h3>Hospitality Solutions </h3> 
             <p>  
            Being associated with various hotels and emerging restaurants we are able to deliver quality 
            solutions to every versatile business organization with our expert team and consultants.
            </p>
            <h3>Associated Businesses</h3>
            <p>
            Being a prevailing entity in your service since 2013 we’ve been successfully able to satisfy our customers. 
            </p>
            <p>
            <p>
            The lists of various such businesses are made available to you as per their respective services:
            </p>
            <ul><li><h3>Industry and Enterprise</h3></li>
            <li>Lancer Footwear</li>
            <li>NESSA Group</li> 
            <li>Wiley</li>
            <li>DAYZ Footwear</li>
            <li>5.Technodot: facility management and more</li> </ul>
            <ul><li><h3>Hospitality and Tourism</h3></li>
            <li>Brewberrys : The coffee bar</li>
            <li>Biotonic</li></ul>
            <ul><li><h3>Technical Support</h3></li></ul>
            <ul><li>Vibra Consultannts</li>
            <li>E-skillTech</li></ul>
            <ul><li><h3>Hotels</h3></li>
            <li>Mahalani Hotels</li>
            <li>Cambay hotels and resorts</li> 
            <li>Apple inn dinner and beds</li></ul>
            <ul><li><h3>Channel Management </h3></li></ul>
           <ul><li><h3>Skill Development</h3></li>
            <li>Parth </li></ul>
           <ul><li><h3>Skilytics: Executing Skills</h3></li></ul> 
            </p>
            </div>
            
            <Footer />
        </div>
    );
};
