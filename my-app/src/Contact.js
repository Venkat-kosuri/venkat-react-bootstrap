import React from 'react'
import emailjs from 'emailjs-com';
import {Link} from 'react-router-dom'
function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_70fq8ms', 'template_y4j5syq', e.target, 'user_YarejoUMyPR5uFrZsJE2K')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
    return (
        <div>
            
            <>
                
  <a href="https://wa.me/919444712328" className="whatsapp_float" target="_blank"> <i className="fa fa-whatsapp whatsapp-icon"></i></a>
     {/* navbar */}
   
<section className="navbar" data-aos='fade-down-right' data-aos-duration ='2000'>
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
     <li class="active"> <Link to="/"> Home </Link></li>
     <li> <Link to="/About"> About </Link></li>
     <li><Link to="/Services"> Services </Link></li>
     <li><Link to ='/Team'>Team</Link></li>
     <li> <Link to ='/Contact'>Contact</Link></li>
       <li><a href="contact.html"><button className="get-started2">Get Started</button></a></li> 
     </ul>
   </div>
 </div>
</nav>
 
</section>

  {/* header */}
 <section className="contact-header" data-aos="flip-right" data-aos-duration="2000">
     <div className="container text-center">
         <div className="row">

      <div className="col-xs-12 col-md-12">
          <h1>GET IN TOUCH</h1>
          <h2><i className="fa fa-home"  aria-hidden="true"></i>CONTACT US</h2>
      </div>
         </div>
     </div>
 </section>

  <section className="services" data-aos="fade-down-right" data-aos-duration="2000">
  <div className="container text-center">
  <div className="row">
   <div className="col-xs-12 col-md-12">
     <h1>Happy To Help</h1>
     <h2>We are happy to talk to you! Get in touch with us</h2>
   </div>
  </div>
  </div>
  </section>
    

    <section id="Contact">
      <div className="container contact">
          <div className="row">
              <div className="col-xs-12 col-md-5 suscipit">
                  <div className="contact-design">

                      <div className="media">
                          <div className="media-left contact-icon">

                              <i className="fa fa-map-marker" aria-hidden="true"></i>

                          </div>
                          <div className="media-body contact-decoration">
                              <h4 className="media-heading">Location:</h4>
                              <p>A108 Adam Street, New York, NY 535022</p>
                          </div>
                      </div>
                      <div className="media">
                          <div className="media-left contact-icon">

                              <i className="fa fa-envelope" aria-hidden="true"></i>
                          </div>
                          <div className="media-body contact-decoration">
                              <h4 className="media-heading">
                                  Email:</h4>
                              <p>kosururndr@gmail.com</p>
                          </div>
                      </div>
                      <div className="media">
                          <div className="media-left contact-icon">

                              <i className="fa fa-phone" aria-hidden="true"></i>
                          </div>
                          <div className="media-body contact-decoration">
                              <h4 className="media-heading">
                                  Call:</h4>
                              <p>+919444712328</p>
                          </div>
                      </div>

                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1938.7838156793712!2d79.41876155802422!3d13.623198497607694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b0bc2d9cff1%3A0x63ff3a3ec0e31243!2sSBI%20Colony%2C%20Royal%20Nagar%2C%20Tirupati%2C%20Andhra%20Pradesh%20517501!5e0!3m2!1sen!2sin!4v1628492137526!5m2!1sen!2sin"  style={{width:"100%" , height:"350px", border:'0px'}}  frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                  </div>

              </div>
              <div className="col-xs-12 col-md-7 suscipit">
                     <div  style={{height:"691px"}} className="contact-design">
                        <form onSubmit={sendEmail} method="post">
                                  <div className="col-xs-12 col-md-6 ">
                                    <div className="form-group contacto">
          <label for="text">Your Name</label>
          <input type="text" className="form-control contact-forms" name='subject' placeholder="Name" required=""/>
      </div>
  </div>
  <div className="col-xs-12 col-md-6">
      <div className="form-group contacto">
          <label for="email">
                  Your Email</label>
          <input type="email" className="form-control contact-forms" name="email"  placeholder="Email"
            required=""/>
      </div>
  </div>
  <div className="col-xs-12">
      <div className="form-group contacto">
          <label for="text">
              Subject</label>
              <input type="text" className="form-control contact-forms" name="message"  placeholder="Subject"
              required=""/>
      <div className="form-group contacto">
          <label for="comment">Message</label>
          <textarea rows='5' cols='10' className='form-control contact-forms' name='message' placeholder='send your message' ></textarea>
      </div>
      </div>
  </div>
  <div className="form-group contact-but">
    {/* <button className="get-started3">Get Started</button> */}
    <input type='submit' className='get-started3' value='send message'/>
  </div>
         </form> 
          </div>
              </div>
    </div>
    </div>
   </section>
          
  
                   
  {/* footer */}
   
<section className="footer" data-aos="fade-down" data-aos-duration="2000">
    <div className="container">
    <div className="row">
      <div className="col-xs-12 col-md-4">
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
         <li><i className="fa fa-home"  aria-hidden="true"> <a href="#">Address</a></i></li>
         <li><i className="fa fa-phone"  aria-hidden="true"><a href="#">+919444712328</a></i></li>
         <li><i className="fa fa-envelope-o" aria-hidden="true"> <a href="#">kosururndr@gmail.com</a></i></li>
      </ul>
      </div>
      <div className="col-xs-12 col-md-4">
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
    <script src="index.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
   
   <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
   <script src="https://smtpjs.com/v3/smtp.js"></script>
  
  <script>
   AOS.init();
 </script> 
         </>
        </div>
    )
}

export default Contact


