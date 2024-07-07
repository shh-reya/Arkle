import React from "react";
import './Home.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from "react-responsive-carousel";
import logo1 from '../../assets/photo/01.jpg';
import logo2 from '../../assets/photo/11.jpg';
import logo3 from '../../assets/photo/12.jpg';
import logo4 from '../../assets/photo/13.jpg';
import Profile from "./Profile";
import Footer from "../Footer";
import { Link, NavLink } from "react-router-dom";
import { About } from "./Industries";

export const Home = () => {
    
    return (<div>
          {/* Carusel-Section-section:1 */}
         <Carousel infiniteLoop autoPlay>
 
                <img src={logo1} alt="study" className="image"/>
                <img src={logo2} alt="study" className="image"/>
                <img src={logo3} alt="study"className="image"/>            
                <img src={logo4} alt="study" className="image"/> 
        
         </Carousel>
 
        {/* hero-page Section-2 */}
        <div className="home-container flex">
          <div>
             <div className="welcome-section flex">
                <div className="welcome-text" style={{marginTop:'30px'}}>
                    {/* <p>--------Welcome To</p> */}
                    <h1 > The Arkle Consultancy!!!</h1>
                </div>
                
              </div> 
              {/* pagragraph-section-2 subsection */}
            <div className="secter flex">
                <h2 style={{margin:'0 0 0px 40px', fontFamily:'sans-serif'}}>"Power of Relevance"</h2>
                <div className="text-part"><p>At Arkle, We Offer B2B Consultancy and Customized Solution to problems. Our purpose is to 
                 build trust in society and solve important problems. Arkle is a Multi-Dimensional 
                 Consultancy Brand with sharpness in delivery and pointed solutions in 360° with its CORE 
                 intact. Our Motive is to derive Uniform, Innovative & Customized Solution for our Clients 
                 matching their – Desire, Need & Relevance – hence proving our purpose- Power of 
                 Relevance! We are a network of firms & Investors committed to deliver quality in – 
                 Institutional Projects, Business Consultancy and Professional services. Driven by Strong 
                 Relationship & common Business Interest, we have our valued partners to undertake and 
                 deliver any assignment as per Client’s Expectation.</p>
                </div><NavLink to='/industries'>
            <button className="btn-1 flex"  >Learn More <i class="fa-solid fa-arrow-right" style={{paddingLeft:"15px",paddingTop:'4px'}}></i></button>
            </NavLink></div>
          </div>
          <div className="image2">
             <img src="https://cdn.pixabay.com/photo/2020/04/23/14/45/museum-5082786_1280.jpg" alt="study"></img>
          </div> 
          </div>

         {/* section-3  */}
         <div className="achivements flex">
          <div className="image2">
             <img src="https://cdn.pixabay.com/photo/2020/05/23/20/08/books-5211309_1280.jpg"></img>
          </div>
          <div className="text-part secter" style={{padding:'30px'}}>
             <h1>Our Courses!!</h1>
             <p>Structured units of learning offered by educational institutions like schools, colleges, and universities. These can cover a wide range of subjects and usually include lectures, assignments, exams, and other assessments.</p>
             <p>The content also highlights the credits earned upon completion, essential for those seeking to fulfill degree requirements or professional development goals. Enrollment information, including deadlines, fees, and required documentation, is clearly laid out. The learning outcomes are articulated to set expectations about the skills and knowledge students will gain. Assessment methods are described to inform students how their performance will be evaluated.</p>
             <button className="btn-1 flex"  >Learn More <i class="fa-solid fa-arrow-right" style={{paddingLeft:"15px",paddingTop:'4px'}}></i></button>
          </div>
          

         </div>
            
         {/* Feedback Section-4 */}
         <div className="feedback-1">
          <div className="feedback flex" style={{marginTop:'10px'}}>
            <h1>Client Feedback</h1><br></br>
          </div>
          <div className="customer-con text-part flex"><center>Customer feedback is any information customers give a company 
               about their experience, and includes insights, opinions, reactions, 
               preferences, and complaints about a company s products or 
               services.</center></div>
              <div className="profile-1 flex">
              <Profile
                title='Card Title'
                body='Content requests are requests from your users or customers to make a particular piece of content. Both content feedback and content requests are useful to content marketers. They help you understand what your audience wants.
                '
                />
              <Profile
                title='Name of client'
                body='Content requests are requests from your users or customers to make a particular piece of content. Both content feedback and content requests are useful to content marketers. They help you understand what your audience wants.
                '
                />
                
          </div> 
          </div>
          
        {/* Partners Section-5 */}
          <div className="Partners">
            <center><h3>Some of our Partners</h3><br></br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis possimus animi nam praesentium illum esse assumenda doloremque magnam dolor dignissimos, pariatur, quas maiores placeat molestiae. Eligendi, voluptatum sequi? Nemo, consequatur?</p></center>
          </div>
        {/* Contact Us Section-7
        <center><h1></h1></center> */}
        {/* footer Section-7 Subsection */}
        <Footer/> 
          
               
         
      </div>
    );
};
