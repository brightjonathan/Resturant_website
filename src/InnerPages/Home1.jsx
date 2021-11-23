import React from 'react'
import photo from '../Images/gallery-1.jpg'
import {Link} from 'react-router-dom'

const Home1 = () => {
    return (
       <React.Fragment>
        
  <section id="hero" class="d-flex align-items-center" style={{backgroundImage: `url(${photo})`}}>
    <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
      <div class="row">
        <div class="col-lg-8">
          <h1>Welcome to <span>Supreme</span></h1>
          <h2>Delivering great food for more than 5 years!</h2>

          <div class="btns">
            <Link to="/menu" class="btn-menu animated fadeInUp scrollto">Our Menu</Link>
            <Link to="/book_table" class="btn-book animated fadeInUp scrollto">Book a Table</Link>
          </div>
         </div>
        <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
          <a href={"https://www.youtube.com/watch?v=_PXJz38_7a8"} target="_blank" rel="noopener noreferrer" class="glightbox play-btn"></a>
          
        </div>

      </div>
    </div>
  </section>

  {/* <main id="main"></main> */}
       </React.Fragment>
    )
}

export default Home1
