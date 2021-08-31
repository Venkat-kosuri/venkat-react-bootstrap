import React from 'react'
import { Link } from 'react-router-dom';
     function About() {
         return (
             <div>
                           
  <a href="https://wa.me/919444712328" class="whatsapp_float" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
    
    {/* NAvbar */}
 <section class="navbar" data-aos="flip-right" data-aos-duration="2000">
   <nav class="navbar navbar-default">
     <div class="container">
       <div class="navbar-header">
         <button type="button" class="navbar-toggle ico-color" data-toggle="collapse" data-target="#myNavbar">
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
         </button>
         <a class="navbar-brand" href=""> </a>
       </div>
       <div class="collapse navbar-collapse" id="myNavbar">
         <ul class="nav navbar-nav navbar-right">
           <li class="active"> <Link to="/"> Home </Link></li>
           <li><Link to="/About"> About </Link></li>
           <li><Link to="/Services"> Services </Link></li>
           <li><Link to ='/Team'>Team</Link></li>
           <li> <Link to ='/Contact'>Contact</Link></li>
           <li><a href="contact.html"><button class="get-started2">Get Started</button></a></li> 
         </ul>
       </div>
     </div>
   </nav>
     
 </section>
 
 {/* header */}
        
     <section class="about-header" data-aos="fade-down" data-aos-duration="2000">
         <div class="container text-center">
             <div class="row">
 
          <div class="col-xs-12 col-md-12">
              <h1> ABOUT US</h1>
              <h2>We Can Handle Just About Anything</h2>
          </div>
             </div>
         </div>
     </section>
   
      <section class="services" data-aos="fade-up-right" data-aos-duration="2000">
      <div class="container text-center">
      <div class="row">
       <div class="col-xs-12 col-md-12">
         <h1> YOU HAVE PROBLEMS, WE HAVE SOLUTIONS</h1>
         <h2> About That Help You Succeed</h2>
       </div>
      </div>
      </div>
      </section>
  
 
   <section class="about-header" data-aos="fade-up" data-aos-duration="2000">
     <div class="container text-center">
         <div class="row">
 
      <div class="col-xs-12 col-md-12">
          <h2>DON’T WAIT</h2>
          <h1>Contact Us For A Free Consult</h1>
          <a href="contact.html"> <button  class="get-started">Get Started</button> </a>
      </div>
         </div>
     </div>
 </section>
 
      
   {/* footer */}
    
 <section class="footer" data-aos="fade-down-right" data-aos-duration="2000">
     <div class="container">
     <div class="row">
       <div class="col-xs-12 col-md-4">
        <h1> Social Media</h1>
                 
        <ul class="icons">
         <a href="https://www.facebook.com/kosuru.ram.5"> <li><i class="fa fa-facebook" aria-hidden="true"></i></li></a>
         <a href="#"> <li><i class="fa fa-twitter" aria-hidden="true"></i></li></a>
          <a href="#"> <li><i class="fa fa-instagram" aria-hidden="true"></i></li></a>
          <a href="#"> <li><i class="fa fa-linkedin" aria-hidden="true"></i></li> </a>
         </ul>
          </div>
       <div class="col-xs-12 col-md-4">
         <h1>Get In Touch</h1>
         <ul class="social">
          <li><i class="fa fa-home"  aria-hidden="true"> <a href="#">Address</a></i></li>
          <li><i class="fa fa-phone"  aria-hidden="true"><a href="#">+919444712328</a></i></li>
          <li><i class="fa fa-envelope-o" aria-hidden="true"> <a href="#">kosururndr@gmail.com</a></i></li>
       </ul>
       </div>
       <div class="col-xs-12 col-md-4">
          <h1> Quick Links</h1>
          <ul class="home-page">
          <li><i class="fa fa-chevron-right" aria-hidden="true"><Link to="/"> Home </Link></i></li>
   <li><i class="fa fa-chevron-right" aria-hidden="true"><Link to="/About"> About </Link> </i></li>
   <li><i class="fa fa-chevron-right" aria-hidden="true"><Link to="/Services"> Services</Link></i></li>
   <li><i class="fa fa-chevron-right" aria-hidden="true"><Link to="/Team"> Team </Link></i></li>
   <li><i class="fa fa-chevron-right" aria-hidden="true"><Link to="/Contact"> Contact </Link></i></li>
          </ul>
       </div>
     </div>
     </div>
   </section>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
   <script>
    AOS.init();
  </script> 
             </div>
         )
     }
     
     export default About
     