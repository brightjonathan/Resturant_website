import React, {useState, useEffect} from 'react';
import './App.css';
import './Styles/Sign-Up.css'
import NavBar from './Component/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home'
import  About from './Pages/About'
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
import Sign_up from './Pages/Sign_up'
import BookTable from './Pages/BookTable'
import Footer from './Component/Footer'




const App = () => {

  //useState to store all our data in an array using useState
  const [alldata, setalldata] = useState([])


  //FOR THE BOOK A TABLE INPUT
 //taking the Book data from the server and putting it inside our useEffect
 useEffect(() => {
  const getdata = async () =>{
      const datafromServer = await BookData()
  //putting the datainside useState
  setalldata(datafromServer)
  }
  getdata()
}, [])
  
    //fetching data from the local Host
    //using async await method
    const BookData = async () =>{
      const res = await fetch("http://localhost:5000/Book")
      const data = await res.json()

      return data
  }

  //for posting the data
  const Bookdata = async (e) =>{
    const res = await fetch("http://localhost:5000/Book", {
      method: "POST",
      headers: {
       "Content-type": "application/json",
     },
      body: JSON.stringify(e),
    })
    const data = await res.json()
    setalldata([...alldata, data])

  }



  //FOR SUBSCRIBE INPUT

  //fetching data from the local Host

  useEffect(() => {
    const getdata = async () =>{
        const datafromServer = await subscribeData()
    //putting the datainside useState
    setalldata(datafromServer)
    }
    getdata()
  }, [])

    //using async await method
    const subscribeData = async () =>{
      const res = await fetch("http://localhost:5000/subscribe")
      const data = await res.json()

      return data
  }


  // for the subscribe input in the footer
  const subscribe = async (e) => {
     const res = await fetch("http://localhost:5000/subscribe", {
       method: "POST",
       headers: {
        "Content-type": "application/json",
      },
       body: JSON.stringify(e),
     })
     const data = await res.json()
     setalldata([...alldata, data])
  }



  //FOR THE CONTACT INPUT
  useEffect(() => {
    const getdata = async () =>{
        const datafromServer = await contactData()
    //putting the datainside useState
    setalldata(datafromServer)
    }
    getdata()
  }, [])

  //fetching data from the local Host
    //using async await method
    const contactData = async () =>{
      const res = await fetch("http://localhost:5000/contact")
      const data = await res.json()

      return data
  }

  //posting contact input
  const contact = async (e) => {
    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
       "Content-type": "application/json",
     },
      body: JSON.stringify(e),
    })
    const data = await res.json()
    setalldata([...alldata, data])
  }


  //FOR THE ACCOUNT

  useEffect(() => {
    const getdata = async () =>{
        const datafromServer = await accountData()
    //putting the datainside useState
    setalldata(datafromServer)
    }
    getdata()
  }, [])
    


   //fetching data from the local Host
    //using async await method
    const  accountData = async () =>{
      const res = await fetch("http://localhost:5000/account")
      const data = await res.json()

      return data
  }

  //posting for the account
  const account = async (e) => {
    const res = await fetch("http://localhost:5000/account", {
      method: "POST",
      headers: {
       "Content-type": "application/json",
     },
      body: JSON.stringify(e),
    })
    const data = await res.json()
    setalldata([...alldata, data])
  }

  return (
    <div>
       <Router>
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route  path="/about" element={<About/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/contact" element={<Contact oncontact={contact}/>} />
        <Route path="/sign_up" element={<Sign_up onaccount={account}/>} />
        <Route path="/book_table" element={<BookTable onBook={Bookdata} />} />
      </Routes>
      <Footer subscribe1={subscribe} />
      </Router>
    </div>
  );
}

export default App;
