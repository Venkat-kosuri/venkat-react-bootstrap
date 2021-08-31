import React from 'react'
import { Link } from 'react-router-dom';
 function Home() {
   return (
     <div>
         <a href="https://wa.me/919444712328" class="whatsapp_float" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>

{/* navbar */}

<section class="navbar " data-aos="fade-down-right"data-aos-duration="2000">
<nav class="navbar navbar-default">
<div class="container text-center">
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
     <li> <Link to="/About"> About </Link></li>
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

<section class="header" data-aos="flip-left"data-aos-duration="2000">
<div class="container-fluid ">
 <div class="row">
   <div class="col-xs-12 col-sm-2 col-md-2   ">
     <img src="./images/14115a73234ed869cdd97f96d5c34f3a_w200 - Copy.gif" alt=""  class="img-circle" data-aos="fade-down" data-aos-duration="2000"/> 
    
    </div>
 <div class="col-xs-12 col-sm-10 col-md-6 " data-aos="flip-left" data-aos-duration="2000">
  <h1>Dr.K.V.R RESEARCH</h1>
  <h3> SCHOOL</h3>
 </div>

 <div class="col-xs-12 col-md-4">
 <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval='2000'>
  
   <ol class="carousel-indicators">
     <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
     <li data-target="#myCarousel" data-slide-to="1"></li>
     <li data-target="#myCarousel" data-slide-to="2"></li>
     <li data-target="#myCarousel" data-slide-to="3"></li>
     <li data-target="#myCarousel" data-slide-to="4"></li>
     <li data-target="#myCarousel" data-slide-to="5"></li>
   </ol>
  
   <div class="carousel-inner">
     <div class="item active">
       <img src="images/image3.jpeg"  />
     </div>
     <div class="item">
       <img src="images/WhatsApp Image 2021-07-29 at 1.45.00 PM.jpeg" alt="" />
     </div>
     <div class="item">
       <img src="images/image5.jpeg"  alt=""/>
     </div>
   <div class="item">
     <img src="images/WhatsApp Image 2021-07-29 at 1.50.04 PM.jpeg" alt="" />
   </div>
   <div class="item">
     <img src="images/image9.jpeg" alt="" />
   </div>
   <div class="item">
     <img src="images/WhatsApp Image 2021-06-25 at 7.01.45 PM (1).jpeg" alt="" />
   </div>
 </div>
</div>
</div>
 <div class="col-xs-12 col-md-5 col-md-offset-7" data-aos="fade-down-right" data-aos-duration="2000">
   <span class="a"> The Solutions</span> <span class="b">hub ...</span>
 </div> 
</div>
</div>
</section>


<section class="founder">
<div class="container">
 <div class="row">
  <div class="col-xs-12 col-md-10 "  data-aos="fade-down-right"data-aos-duration="2000"> 
    <span class="c">We are Introducing a unique model in education system.  We observed most <br/> of the schools are the providing theoritical knowledge . Here we have different system with only one practical knowledge with real issues facing daily life as well as industry.</span>
    <p>  By. Dr. K.V Ramana</p>
  </div>
  <div class="col-xs-12 col-md-2">
   <img src="images/WhatsApp Image 2021-07-19 at 9.35.04 AM.jpeg"  class="img-circle" alt=""/>
</div>
 </div>
</div>
</section>

<section class="header2" data-aos="fade-up"data-aos-duration="2000">
<div class="container text-center">
   <div class="row">

<div class="col-xs-12 col-md-12">
    <h1>DON’T WAIT</h1>
    <h2>Contact Us For A Free Consult</h2>
    <a href="contact.html"> <button  class="get-started">Get Started</button> </a>
</div>
   </div>
</div>
</section>



{/* footer */}

<section class="footer" data-aos="fade-down-right" data-aos-duration="2000">
<div class="container ">
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
  <li><i class="fa fa-home"  aria-hidden="true" ><a href="#">Address</a></i></li>
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
 
 export default Home
 