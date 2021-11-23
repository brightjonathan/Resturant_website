import React from 'react'
import {Link} from 'react-router-dom'
import photo1 from '../Images/gallery-6.jpg'
import pro2 from '../Images/prof2.jpg'
import pro1 from '../Images/prof3.jpg'
import chef from '../Images/chefs-3.jpg'


const About1 = () => {
    return (
        <React.Fragment >
    <section id="chefs" class="chefs"  style={{backgroundColor:"black"}}>
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Chefs</h2>
          <p>Our Proffesional Chefs</p>
        </div>

        <div class="row">

          <div class="col-lg-4 col-md-6">
            <div class="member" data-aos="zoom-in" data-aos-delay="100">
              <img src={chef} class="img-fluid" alt="" />
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Walter White</h4>
                  <span>Master Chef</span>
                </div>
                <div class="social">
                <Link to="#"><i class="bi bi-twitter"></i></Link>
                  <Link to="#"><i class="bi bi-facebook"></i></Link>
                  <Link to="#"><i class="bi bi-instagram"></i></Link>
                  <a href="https://github.com/brightjonathan"  target="_blank" rel="noopener noreferrer" class="google-plus"><i class="bi bi-github"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="member" data-aos="zoom-in" data-aos-delay="200">
              <img src={pro2} class="img-fluid" alt="" />
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Sarah Jhonson</h4>
                  <span>Patissier</span>
                </div>
                <div class="social">
                <Link to="#"><i class="bi bi-twitter"></i></Link>
                  <Link to="#"><i class="bi bi-facebook"></i></Link>
                  <Link to="#"><i class="bi bi-instagram"></i></Link>
                  <a href="https://github.com/brightjonathan"  target="_blank" rel="noopener noreferrer" class="google-plus"><i class="bi bi-github"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="member" data-aos="zoom-in" data-aos-delay="300">
              <img src={pro1} class="img-fluid" alt="" />
              <div class="member-info">
                <div class="member-info-content">
                  <h4>William Anderson</h4>
                  <span>Cook</span>
                </div>
                <div class="social">
                  <Link to="#"><i class="bi bi-twitter"></i></Link>
                  <Link to="#"><i class="bi bi-facebook"></i></Link>
                  <Link to="#"><i class="bi bi-instagram"></i></Link>
                  <a href="https://github.com/brightjonathan"  target="_blank" rel="noopener noreferrer" class="google-plus"><i class="bi bi-github"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

        </React.Fragment>
    )
}

export default About1
