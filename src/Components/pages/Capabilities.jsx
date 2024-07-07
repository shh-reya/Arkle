import React from "react"
import Footer from "../Footer";
import Background from "../Background";
import logo from '../../assets/photo/Capabilities.webp'


export const Capabilities =() =>{

    return(
        <div>
            <Background url={logo} text={'Our Capabilities...'}/>
            <div className="sec-1" style={{marginBottom:'70px'}}>
            <center>  
            <p>
            Welcome to Arkle Consultancy, your trusted partner in navigating the complex world of education. 
            With years of experience and a team of dedicated professionals, we specialize in providing personalized 
            guidance and support to students, parents, and educational institutions. Our mission is to empower learners 
            to achieve their academic and career goals by offering expert advice, tailored services, and comprehensive resources.
            </p></center>
           
            </div>
        <Footer/>
        </div>
    )
    
    }
    export default Capabilities;