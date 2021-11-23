import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Footer = ({subscribe1}) => {

  //useState for the input
  const [Subscribe, setSubscribe] = useState("")

 const submit = (e) => {
    e.preventDefault()

    //calling the props
    subscribe1({Subscribe})

     //clearing the input
     setSubscribe("")
     
  }


    return (
        <React.Fragment>
        
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6">
            <div class="footer-info">
              <h3>Supreme Restaurant</h3>
              <p>
                  A108 Adam Street
                  <br/>
                  Lagos, Nigeria
                  <br/>
                  <br/><strong>Phone:</strong> +2348137122768
                  <br/><strong>Email:</strong> brightjonathan64@gmail.com
                  <br/>
              </p>
              <div class="social-links mt-3">
                <Link to="#" class="twitter"><i class="bx bxl-twitter"></i></Link>
                <Link to="#" class="facebook"><i class="bx bxl-facebook"></i></Link>
                <Link to="#" class="instagram"><i class="bx bxl-instagram"></i></Link>
                <a href="https://github.com/brightjonathan"  target="_blank" rel="noopener noreferrer" class="google-plus"><i class="bi bi-github"></i></a>
                {/* <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a> */}
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <Link to="/">Home</Link></li>
              <li><i class="bx bx-chevron-right"></i> <Link to="/about">About us</Link></li>
              <li><i class="bx bx-chevron-right"></i> <Link to="/Menu">Menu</Link></li>
              <li><i class="bx bx-chevron-right"></i> <Link to="/contact">Contact</Link></li>
              <li><i class="bx bx-chevron-right"></i> <Link to="/sign_up">Sign up / Login</Link></li>
              <li><i class="bx bx-chevron-right"></i> <Link to="/book_table">Book a Table</Link></li>
              <li><i class="bx bx-chevron-right"></i> <Link to="#">Terms of service</Link></li>
              <li><i class="bx bx-chevron-right"></i> <Link to="#">Privacy policy</Link></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <Link to="#">Fast Food Restaurants</Link></li>
              <li><i class="bx bx-chevron-right"></i> <Link to="#">Fine Dining Restaurants</Link></li>
              <li><i class="bx bx-chevron-right"></i> <Link to="#">Cafe Restaurants</Link></li>
              <li><i class="bx bx-chevron-right"></i> <Link to="#">Prepare It Yourself Restaurants</Link></li>
              <li><i class="bx bx-chevron-right"></i> <Link to="#">Children's Restaurants</Link></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Subscribe to Supreme news releases and media packages.</p>
            <form onSubmit={submit}>
              <input type="email" name="email" value={Subscribe} onChange={(e) => setSubscribe(e.target.value)} />
              <input type="submit" value="Subscribe"/>
            </form>

          </div>

        </div>
      </div>
    </div>
  </footer>
        </React.Fragment>
    )
}

export default Footer