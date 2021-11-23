import React from 'react'

const Home2 = () => {
    return (
        <React.Fragment>
            
    <section id="about" class="about" style={{backgroundColor:"black"}}>
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
            <div class="about-img">
              <img src="assets/img/about.jpg" alt=""/>
            </div>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>A Brief Note On The Main Motive Of The Supreme.</h3>
            <p class="fst-italic">
            SUPREME is an eating establishment focusing on heathy, nutritious, and fast food in Lagos, Nigeria. SUPREME is specialized burgers, salads, shakes and other refreshments.
            SUPREME follows a different strategy with variety of choices changing quarterly.
            </p>
            <ul>
              <li><i class="bi bi-check-circle"></i> The keys to success for SUPREME will be repeat business, an excellent location convenient in cities, close to businesses market and its unique Western Cuisine.</li>
              <li><i class="bi bi-check-circle"></i> The main motive of the restaurant is to provide these customers with the best service and to create the greatest sales volume during the restaurants peak hours of operation.</li>
              <li><i class="bi bi-check-circle"></i>The SUPREME has a comprehensive advertising, promotion and marketing campaign that will increase sales through radio, flyers and discounts.</li>
            </ul>
            <p>
            From the moment a guest steps into SUPREME, the staff is collecting information about them. While this may sound a bit creepy, the reason is simple: to give the guest the best experience possible. 
            </p>
          </div>
        </div>

      </div>
    </section>
        </React.Fragment>
    )
}

export default Home2
