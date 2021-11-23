import React, {useState} from 'react'

const Contact1 = ({oncontact2}) => {

    //useState for the input 
    const [name, setname] = useState("")
    const [Email, setEmail] = useState("")
    const [subject, setsubject] = useState("")
    const [message, setmessage] = useState("")

    const handle = (e)=>{
        e.preventDefault()

        //calling the props
        oncontact2({ name, Email, subject, message })

        //clearing the input
        setname("")
        setEmail("")
        setsubject("")
        setmessage("")
     }

     
    return (
        <React.Fragment>
                     
        <section id="contact" class="contact" style={{backgroundColor: "black"}}>
          <div class="container" data-aos="fade-up">
    
            <div class="section-title">
              <h2>Contact</h2>
              <p>Contact Us</p>
            </div>
          </div>
    
          <div class="container" data-aos="fade-up">
    
            <div class="row mt-5">
    
              <div class="col-lg-4">
                <div class="info">
                  <div class="address">
                    <i class="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>A108 Adam Street, Lagos, Nigeria</p>
                  </div>
    
                  <div class="open-hours">
                    <i class="bi bi-clock"></i>
                    <h4>Open Hours:</h4>
                    <p>
                      Monday-Saturday:<br/>
                      12:00 AM - 24:00 PM
                    </p>
                  </div>
    
                  <div class="email">
                    <i class="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>brightjonathan64@gmail.com</p>
                  </div>
    
                  <div class="phone">
                    <i class="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+2348137122768</p>
                  </div>
    
                </div>
    
              </div>
    
              <div class="col-lg-8 mt-5 mt-lg-0">
    
                <form role="form" class="php-email-form" onSubmit={handle}>
                  <div class="row">
                    <div class="col-md-6 form-group">
                      <input type="text"  value={name} onChange={(e) => setname(e.target.value)} name="name"  class="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email"  value={Email} onChange={(e) => setEmail(e.target.value)} class="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div class="form-group mt-3">
                    <input type="text"  value={subject} onChange={(e) => setsubject(e.target.value)} class="form-control" name="subject" id="subject" placeholder="Subject" required />
                  </div>
                  <div class="form-group mt-3">
                    <textarea class="form-control"  value={message} onChange={(e) => setmessage(e.target.value)} name="message" rows="8" placeholder="Message" required></textarea>
                  </div>
                
                  <div class="text-center"><button type="submit">Send Message</button></div>
                </form>
    
              </div>
    
            </div>
    
          </div>
        </section>
            </React.Fragment>
    )
}

export default Contact1
