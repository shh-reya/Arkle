import React from "react"
import Footer from "../Footer"
import Background from "../Background"
import logo from '../../assets/photo/Career.jpg'
import './Carrers.css';
import { LiaArrowRightSolid } from "react-icons/lia";

export const Carrers =() =>{

    return(
        <div>
            <Background url={logo} text={'Careers at Arkle Consultancy...'}/>
        {/* section-1     */}
        <div className="sec-1">    
        <h1>Join Our Team <LiaArrowRightSolid/></h1>
          <div>
            <center>
            <p>
            At Arkle Consultancy, we are passionate about empowering students and professionals to achieve 
            their educational and career goals. Our team is dedicated to providing top-notch consultancy services,
            and we are always on the lookout for talented individuals who share our vision and commitment.
            </p>
            </center>
          </div>
        </div>
        {/* section-2 */}
        <div className="sec-2 sec-1">
        <h2 >Why Work With Us?</h2>
        <div>
           <ul>
            <li><h4>Impactful Work:</h4></li>
                <p>Make a difference in the lives of students and professionals by guiding them through 
                important educational and career decisions.
                </p>
            <li><h4>Collaborative Environment:</h4></li>
                <p>Work alongside a team of experienced and supportive colleagues who are dedicated to 
                excellence.
                </p>
            <li><h4>Continuous Learning:</h4></li> 
                <p> We invest in the professional growth of our team members through ongoing training,
                 workshops, and development opportunities.
                 </p> 
            <li><h4>Innovative Solutions:</h4></li> 
                <p>Be part of a company that leverages the latest tools and technologies to provide 
                 cutting-edge consultancy services.
                </p>          
          </ul> 
        </div>
        </div>
        {/* section-3 */}
        <div className="sec-1">
            <h2>Stay Connected</h2>
            <p>Although we do not have any current job openings, we are always interested in hearing from talented 
               individuals who are passionate about education and career development.
            </p>
            <p>If you would like to be considered for future opportunities, please send your resume and a cover letter
               detailing your experience and the type of role you are interested in to "arkleconsultancy@gmail.com". 
               We will keep your information on file and contact you if a suitable position becomes available.</p>
        </div>
        {/* section-4 */}
        <div className="sec-1 sec-4">
            <h2>Our Commitment to Diversity and Inclusion</h2>
            <p>At Arkle Consultancy, we believe that diversity and inclusion are essential to our success. 
                We are committed to creating a workplace where everyone feels valued and respected, and 
                we actively seek to recruit a diverse workforce. We are proud to be an equal opportunity employer.
            </p>
        </div>
       <Footer/>
        </div>
    )
    
    }
    