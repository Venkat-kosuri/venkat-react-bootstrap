import React from 'react'
import { Link } from 'react-router-dom';
function Team() {
    return (
        <div>
             <>
  <a href="https://wa.me/919444712328" className="whatsapp_float" target="_blank"> <i className="fa fa-whatsapp whatsapp-icon"></i></a>
  
   {/* navbar */}
<section className="navbar" data-aos="fade-down"data-aos-duration="2000">
<nav className="navbar navbar-default">
 <div className="container">
   <div className="navbar-header">
     <button type="button" className="navbar-toggle ico-color" data-toggle="collapse" data-target="#myNavbar">
       <span className="icon-bar"></span>
       <span className="icon-bar"></span>
       <span className="icon-bar"></span>
     </button>
     <a className="navbar-brand" href=""> </a>
   </div>
   <div className="collapse navbar-collapse" id="myNavbar">
     <ul className="nav navbar-nav navbar-right">
       <li className="active"><Link to ='/Home'>Home</Link></li>
       <li><Link to ='/About'>About</Link></li>
       <li><Link to ='/Services'>Services</Link></li>
       <li><Link to ='/Team'>Team</Link></li>
       <li> <Link to ='/Contact'>Contact</Link> </li>
       <li><a href="contact.html"><button className="get-started2">Get Started</button></a></li> 
     </ul>
   </div>
 </div>
</nav>
 
</section>

   {/* header */}
    
 <section className="team-header" data-aos="flip-left" data-aos-duration ='2000'>
     <div className="container text-center ">
         <div className="row">

      <div className="col-xs-12 col-md-12">
          <h2> Team Our School </h2>
          <h1>We Can Handle Just About Anything</h1>
            </div>
          </div>
         </div>
           </section>
   
  <section className="services" data-aos="fade-down-right" data-aos-duration="2000">
  <div className="container text-center">
  <div className="row">
   <div className="col-xs-12 col-md-12">
     <h1> TEAM</h1>
     <h2>Our Team Help You Succeed</h2>
   </div>
  </div>
  </div>
  </section>
    


   {/* our team mates */}

<section9 id="Team">
  <div className="container-fluid">
      <div className="row">
          <div className="col-xs-12 team-bg">
              <div className="container animate__animated animate__fadeInUp">
                  <div className="row">
                      <div className="col-xs-12 col-md-6" data-aos="flip-left" data-aos-duration="2000">
                          <div className="teams">
                              <div className="media">
                                  <div className="media-left team-members-img">
                                      <img src="images/image 1.jpeg" className="media-object"  style={{width:'100px'}} />
                                  </div>
                                  <div className="media-body team-members">
                                      <h4 className="media-heading">Dr. K. V. Ramanaiah</h4>
                                      <span>Ph.D, IITM; Bionorganic chemistry expert</span>
                                     
                                      <ul className="icons">
                                          {/*  <li><i className="fa fa-twitter" aria-hidden="true"></i></li>  */}
                                          <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                                          <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                          <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                                      </ul>
                                  </div>
                              </div>

                          </div>
                      </div>
                      <div className="col-xs-12 col-md-6 col-xs-12" data-aos="flip-right" data-aos-duration="2000">
                          <div className="teams">
                              <div className="media">
                                  <div className="media-left team-members-img" >
                                      <img src="images/image2.jpeg" className="media-object" style={{width:'100px'}} />
                                  </div>
                                  <div className="media-body team-members" >
                                      <h4 className="media-heading">
                                        Dr. Sudharshan Reddy
                                      </h4>
                                      <span>Ph.D, IITM; Organic chemistry expert</span>
                                     
                                      <ul className="icons">
                                         {/*  <li><i className="fa fa-twitter" aria-hidden="true"></i></li>  */}
                                          <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                                          <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                          <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                                      </ul>
                                  </div>
                              </div>

                          </div>


                      </div>
                      <div className="col-xs-12 col-md-6 col-xs-12" data-aos="fade-up" data-aos-duration="2000">
                          <div className="teams">
                              <div className="media">
                                  <div className="media-left team-members-img">
                                      <img src="images/image3.jpeg" className="media-object" style={{width:'100px'}} />
                                  </div>
                                  <div className="media-body team-members">
                                      <h4 className="media-heading">
                                        Dr. A . Parandhaman Reddy
                                      </h4>
                                      <span>Ph.d, IITM; Theoretical experiments at high tem study</span>
                                     
                                      <ul className="icons">
                                          {/*  <li><i className="fa fa-twitter" aria-hidden="true"></i></li>  */}
                                          <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                                          <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                          <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                                      </ul>
                                  </div>
                              </div>

                          </div>


                      </div>
                      <div className="col-xs-12 col-md-6 col-xs-12" data-aos="fade-right" data-aos-duration="2000">
                          <div className="teams1">
                              <div className="media">
                                  <div className="media-left team-members-img">
                                      <img src="images/image4.jpeg" className="media-object" style={{width:'100px'}} />
                                  </div>
                                  <div className="media-body team-members">
                                      <h4 className="media-heading">
                                        Dr. B. Sreenivasulu 
                                      </h4>
                                      <span>Ph.D, IITM; postdoc iisc, supramolecular chemistry expert</span>
                                     
                                      <ul className="icons">
                                         {/*  <li><i className="fa fa-twitter" aria-hidden="true"></i></li>  */}
                                          <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                                          <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                          <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                                      </ul>
                                  </div>
                              </div>

                          </div>


                      </div>
                  </div>
              </div>

          </div>
      </div>
  </div>
</section9>
 
      
<section9 id="Team">
    <div className="container-fluid">
        <div className="row">
            <div className="col-xs-12 team-bg">
                <div className="container animate__animated animate__fadeInUp">
                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-xs-12" data-aos="flip-left" data-aos-duration="2000">
                            <div className="teams">
                                <div className="media">
                                    <div className="media-left team-members-img">
                                        <img src="images/image 1.jpeg" className="media-object" style={{width:'100px'}} />
                                    </div>
                                    <div className="media-body team-members">
                                        <h4 className="media-heading"> Dr. M. Pawan kumar</h4>
                                        <span>Ph.D, IITM; nanochemistry expert</span>
                                       
                                        <ul className="icons">
                                          {/*  <li><i className="fa fa-twitter" aria-hidden="true"></i></li>  */}
                                            <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                                        </ul>
                                    </div>
                                </div>
  
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6 col-xs-12" data-aos="flip-right" data-aos-duration="2000">
                            <div className="teams">
                                <div className="media">
                                    <div className="media-left team-members-img">
                                        <img src="images/image2.jpeg" className="media-object" style={{width:'100px'}} />
                                    </div>
                                    <div className="media-body team-members">
                                        <h4 className="media-heading">
                                            Dr. T. Madhusudhan 
                                        </h4>
                                        <span>Ph.D, IITM; catalysis chemistry expert</span>
                                       
                                        <ul className="icons">
                                          {/*  <li><i className="fa fa-twitter" aria-hidden="true"></i></li>  */}
                                            <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                                        </ul>
                                    </div>
                                </div>
  
                            </div>
  
  
                        </div>
                        <div className="col-xs-12 col-md-6 col-xs-12" data-aos="fade-up" data-aos-duration="2000">
                            <div className="teams">
                                <div className="media">
                                    <div className="media-left team-members-img">
                                        <img src="images/image3.jpeg" className="media-object" style={{width:'100px'}} />
                                    </div>
                                    <div className="media-body team-members">
                                        <h4 className="media-heading">
                                            Dr. K. Satish 
                                        </h4>
                                        <span>Ph.D, IITM; solid state expert</span>
                                       
                                        <ul className="icons">
                                           {/*  <li><i className="fa fa-twitter" aria-hidden="true"></i></li>  */}
                                            <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                                        </ul>
                                    </div>
                                </div>
  
                            </div>
  
  
                        </div>
                        <div className="col-xs-12 col-md-6 col-xs-12 "data-aos="fade-right" data-aos-duration="2000" >
                            <div className="teams1">
                                <div className="media">
                                    <div className="media-left team-members-img">
                                        <img src="images/image4.jpeg" className="media-object" style={{width:'100px'}} />
                                    </div>
                                    <div className="media-body team-members">
                                        <h4 className="media-heading">
                                            Dr. Bhargav & Dr. Abhinav
                                        </h4>
                                        <span>Ph.D, IITM;quantum chemistry experts</span>
                                       
                                        <ul className="icons">
                                            {/*  <li><i className="fa fa-twitter" aria-hidden="true"></i></li>  */}
                                            <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                                        </ul>
                                    </div>
                                </div>
  
                            </div>
  
  
                        </div>
                    </div>
                </div>
  
            </div>
        </div>
    </div>
  </section9>
   
  
            
<section9 id="Team">
    <div className="container-fluid">
        <div className="row">
            <div className="col-xs-12 team-bg">
                <div className="container animate__animated animate__fadeInUp">
                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-xs-12" data-aos="flip-right"  data-aos-duration="2000">
                            <div className="teams">
                                <div className="media">
                                    <div className="media-left team-members-img">
                                        <img src="images/image 1.jpeg" className="media-object" style={{width:'100px'}} />
                                    </div>
                                    <div className="media-body team-members">
                                        <h4 className="media-heading">Dr. Sk. Basha</h4>
                                        <span>Ph.D, IITM; Organic synthesis expert</span>
                                       
                                        <ul className="icons">
                                           {/*  <li><i className="fa fa-twitter" aria-hidden="true"></i></li>  */}
                                            <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                                        </ul>
                                    </div>
                                </div>
  
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6 col-xs-12" data-aos="flip-left" data-aos-duration="2000">
                            <div className="teams">
                                <div className="media">
                                    <div className="media-left team-members-img">
                                        <img src="images/image2.jpeg" className="media-object" style={{width:'100px'}} />
                                    </div>
                                    <div className="media-body team-members">
                                        <h4 className="media-heading">
                                            Dr. Naganna & Dr. E Ramana
                                        </h4>
                                        <span>Ph.D, IITM; polymer chemistry experts</span>
                                       
                                        <ul className="icons">
                                           {/*  <li><i className="fa fa-twitter" aria-hidden="true"></i></li>  */}
                                            <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                                        </ul>
                                    </div>
                                </div>
  
                            </div>
  
  
                        </div>
                        <div className="col-xs-12 col-md-6 col-xs-12" data-aos="fade-top" data-aos-duration="2000" >
                            <div className="teams">
                                <div className="media">
                                    <div className="media-left team-members-img">
                                        <img src="images/image3.jpeg" className="media-object" style={{width:'100px'}} />
                                    </div>
                                    <div className="media-body team-members">
                                        <h4 className="media-heading">
                                            Dr. Anjaiah
                                        </h4>
                                        <span>Ph.D, IITM;  electro chemistry expert</span>
                                       
                                        <ul className="icons">
                                          {/*  <li><i className="fa fa-twitter" aria-hidden="true"></i></li>  */}
                                            <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                                        </ul>
                                    </div>
                                </div>
  
                            </div>
  
  
                        </div>
                        <div className="col-xs-12 col-md-6 col-xs-12" data-aos="fade-right" data-aos-duration="2000">
                            <div className="teams1">
                                <div className="media">
                                    <div className="media-left team-members-img">
                                        <img src="images/image4.jpeg" className="media-object" style={{width:'100px'}} />
                                    </div>
                                    <div className="media-body team-members">
                                        <h4 className="media-heading">
                                            Dr. Eswar kumar
                                        </h4>
                                        <span>Ph.D, IITM;organometallic chemistry expert</span>
                                       
                                        <ul className="icons">
                                          {/*  <li><i className="fa fa-twitter" aria-hidden="true"></i></li>  */}
                                            <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                                        </ul>
                                    </div>
                                </div>
  
                            </div>
  
  
                        </div>
                    </div>
                </div>
  
            </div>
        </div>
    </div>
  </section9>
   

                      
<section9 id="Team">
    <div className="container-fluid">
        <div className="row">
            <div className="col-xs-12 team-bg">
                <div className="container-fluid animate__animated animate__fadeInUp">
                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-xs-12" data-aos="flip-left" data-aos-duration="2000">
                            <div className="teams">
                                <div className="media">
                                    <div className="media-left team-members-img">
                                        <img src="images/image 1.jpeg" className="media-object" style={{width:'100px'}} />
                                    </div>
                                    <div className="media-body team-members">
                                        <h4 className="media-heading"> Dr. Yadi</h4>
                                        <span>Ph.D, IITM; assistant prof. IitG, organic synthesis expert</span>
                                       
                                        <ul className="icons">
                                           {/*  <li><i className="fa fa-twitter" aria-hidden="true"></i></li>  */}
                                            <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                                        </ul>
                                    </div>
                                </div>
  
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4 col-xs-12" data-aos="fade-down-right" data-aos-duration="2000" >
                            <div className="teams">
                                <div className="media">
                                    <div className="media-left team-members-img">
                                        <img src="images/image2.jpeg" className="media-object" style={{width:'100px'}} />
                                    </div>
                                    <div className="media-body team-members">
                                        <h4 className="media-heading">
                                            Dr. M. Ramesh
                                        </h4>
                                        <span>Ph.D, IITM; organic poly molecules synthesis expert</span>
                                       
                                        <ul className="icons">
                                         {/*  <li><i className="fa fa-twitter" aria-hidden="true"></i></li>  */}
                                            <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                                        </ul>
                                    </div>
                                </div>
  
                            </div>
  
  
                        </div>
                        <div className="col-xs-12 col-md-4 col-xs-12" data-aos="flip-right" data-aos-duration="2000">
                            <div className="teams">
                                <div className="media">
                                    <div className="media-left team-members-img">
                                        <img src="images/image3.jpeg" className="media-object" style={{width:'100px'}} />
                                    </div>
                                    <div className="media-body team-members">
                                        <h4 className="media-heading">
                                            Dr. Ramesh
                                        </h4>
                                        <span>Ph.D, IITM;surface chemistry expert</span>
                                       
                                        <ul className="icons">
                                          {/*  <li><i className="fa fa-twitter" aria-hidden="true"></i></li>  */}
                                            <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                                        </ul>
                                    </div>
                                </div>
  
                            </div>
  
  
                        </div>
                    </div>
                </div>
  
            </div>
        </div>
    </div>
  </section9>
   
  
           
  <section className="team-header" data-aos="fade-up"data-aos-duration="2000"> 
    <div className="container text-center">
        <div className="row">

     <div className="col-xs-12 col-md-12">
         <h2>DON’T WAIT</h2>
         <h1>Contact Us For A Free Consult</h1>
         <a href="contact.html"> <button  className="get-started">Get Started</button> </a>
     </div>
        </div>
    </div>
</section>


   {/* footer */}
   
<section className="footer" data-aos="fade-down-right" data-aos-duration="2000" >
    <div className="container">
    <div className="row">
      <div className="col-xs-12 col-md-3 col-md-offset-1">
       <h1> Social Media</h1>
                
       <ul className="icons">
        <a href="https://www.facebook.com/kosuru.ram.5"> <li><i className="fa fa-facebook" aria-hidden="true"></i></li></a>
        <a href="#"> <li><i className="fa fa-twitter" aria-hidden="true"></i></li></a>
         <a href="#"> <li><i className="fa fa-instagram" aria-hidden="true"></i></li></a>
         <a href="#"> <li><i className="fa fa-linkedin" aria-hidden="true"></i></li> </a>
        </ul>
         </div>
      <div className="col-xs-12 col-md-4">
        <h1>Get In Touch</h1>
        <ul className="social">
         <li><i className="fa fa-home"  aria-hidden="true"><a href="#">Address</a></i></li>
         <li><i className="fa fa-phone"  aria-hidden="true"><a href="#">+919444712328</a></i></li>
         <li><i className="fa fa-envelope-o" aria-hidden="true"><a href="#">kosururndr@gmail.com</a></i></li>
      </ul>
      </div>
      <div className="col-xs-12 col-md-3">
         <h1> Quick Links</h1>
         <ul className="home-page">
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
 </>
        </div>
    )
}

export default Team
