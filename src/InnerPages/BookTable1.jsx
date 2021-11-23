import React, {useState} from 'react'

const BookTable1 = ({onBook2}) => {

  //useState for the input
  const [name, setname] = useState("")
  const [Email, setEmail] = useState("")
  const [number, setnumber] = useState("")
  const [date, setdate] = useState("")
  const [time, settime] = useState("")
  const [people, setpeople] = useState("")
  const [message, setmessage] = useState("")

    const submit = (e) =>{
        e.preventDefault()

        //calling the props
        onBook2({name, Email, number, date, time, people, message})

        //clearing the input
        setname("")
        setEmail("")
        setnumber("")
        setdate("")
        settime("")
        setpeople("")
        setmessage("")
         
      }

    return (
       <React.Fragment>
        
    <section id="book-a-table" class="book-a-table" >
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Reservation</h2>
          <p>Book a Table</p>
        </div>

        <form onSubmit={submit} role="form" class="php-email-form" data-aos="fade-up" data-aos-delay="100">
          <div class="row">
            <div class="col-lg-4 col-md-6 form-group">
              <input type="text" name="name" value={name} onChange={(e) => setname(e.target.value)} class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input type="email" class="form-control" name="email" value={Email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input type="number" class="form-control" name="phone" value={number} onChange={(e) => setnumber(e.target.value)} id="phone" placeholder="Phone Number" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input type="date" name="date" class="form-control" value={date} onChange={(e) => setdate(e.target.value)} id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input type="time" class="form-control" name="time"  value={time} onChange={(e) => settime(e.target.value)} id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input type="number" class="form-control" name="people"  value={people} onChange={(e) => setpeople(e.target.value)} id="people" placeholder="Number of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
              <div class="validate"></div>
            </div>
          </div>
          <div class="form-group mt-3">
            <textarea class="form-control" name="message" value={message} onChange={(e) => setmessage(e.target.value)} rows="5" placeholder="Message"></textarea>
            <div class="validate"></div>
          </div>
          <div class="text-center"><button type="submit">Book a Table</button></div>
        </form>

      </div>
    </section>

       </React.Fragment>
    )
}

export default BookTable1
