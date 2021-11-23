import React from 'react'
import gallary1 from '../Images/gallery-1.jpg'
import gallary2 from '../Images/gallery-2.jpg'
import gallary3 from '../Images/gallery-3.jpg'
import gallary4 from '../Images/gallery-4.jpg'
import gallary5 from '../Images/gallery-5.jpg'
import gallary6 from '../Images/gallery-6.jpg'
import gallary7 from '../Images/gallery-7.jpg'
import gallary8 from '../Images/gallery-8.jpg'


const About2 = () => {
    return (
        <React.Fragment>

    <section id="gallery" class="gallery">

      <div class="container" data-aos="fade-up">
        <div class="section-title2">
          <h2>Gallery</h2>
          <p>Some photos from Supreme Restaurant</p>
        </div>
      </div>

      <div class="container-fluid" data-aos="fade-up" data-aos-delay="100">

        <div class="row g-0">

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
                <img src={gallary8} alt="" class="img-fluid" />
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
                <img src={gallary7} alt="" class="img-fluid" />
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
                <img src={gallary6} alt="" class="img-fluid" />
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
                <img src={ gallary5} alt="" class="img-fluid" />
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
                <img src={gallary4} alt="" class="img-fluid" />
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
                <img src={gallary3} alt="" class="img-fluid" />
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
                <img src={gallary2} alt="" class="img-fluid" />
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
                <img src={gallary1} alt="" class="img-fluid" />
            </div>
          </div>

        </div>

      </div>
    </section>

        </React.Fragment>
    )
}

export default About2
