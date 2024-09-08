import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import Swal from 'sweetalert2';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./Email.css"

const Email = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [salutation, setSalutation] = useState("");
  const [subject, setSubject] = useState("");
  const [purpose, setPurpose] = useState("");
 
  const sendEmail = (e) => {
    if (name === "" && email === "" && message === ""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all fields!'
      });
    }
    else {
      Swal.fire({
        title: 'Are you sure you want to submit?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Yes, Submit",
        cancelButtonText: "No"
      }).then((result) => {
      if (result.isConfirmed){
        /*
        emailjs
          .sendForm(
            'service_kkdhmlb', 
            'template_yqxtmac', 
            form.current, {
            publicKey: '3n8xXSvm4KPDChxv-',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          */
        Swal.fire("Submitted!", "Your message has been sent to the customer service team.", "success")
      }
    })
    }
      
    e.preventDefault();

    const url = "http://localhost:8000/email.php";

    let formData = new FormData();
    formData.append('user_name', name);
    formData.append('user_email', email);
    formData.append('user_message', message);
    formData.append('salutation', salutation);

    axios.post(url, formData)
    .then((response) => alert(response.data))
    .catch(error => alert(error.message))

    /*
    fetch("http://localhost:8000/email.php", {
      method: "POST",
      body: formData,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.success)
        console.log("Success!");
      else 
        console.log("Error!"), data.eror;
    })
    .catch(error => {
      console.log('Failed', error);
    });
  };
  */
  };

  return (
    <div>
      <div className="container-lg">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group d-flex align-items-center">
            <label className='form label'>Salutations</label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={salutation === "Mr"} onChange={() => setSalutation("Mr")}/>
              <label className="form-check-label" htmlFor="flexCheckDefault">Mr</label>
            </div>

            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={salutation === "Mrs"} onChange={() => setSalutation("Mrs")}/>
              <label className="form-check-label" htmlFor="flexCheckDefault">Mrs</label>
            </div>

            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={salutation === "Ms"} onChange={() => setSalutation("Ms")}/>
              <label className="form-check-label" htmlFor="flexCheckDefault">Ms</label>
            </div>

            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={salutation === "Mdm"} onChange={() => setSalutation("Mdm")}/>
              <label className="form-check-label" htmlFor="flexCheckDefault">Mdm</label>
            </div>
          </div>

          <label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">@</span>
              <input 
                style = {{width: '70vw'}} 
                type= "text" 
                name= "user_name" 
                className= "form-control" 
                placeholder= "Username"
                value = {name}
                onChange = {(e) => setName(e.target.value)} //handle input change
                aria-label= "Username" 
                aria-describedby= "basic-addon1"/>
            </div>
          </label>

          <br></br>

          <label>
            <div className="input-group mb-3">
              <input 
                style = {{width: '70vw'}} 
                name = "user_email" 
                type= "text" 
                className = "form-control" 
                placeholder= "Email"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)} //handle input change
                aria-label= "Recipient's username" 
                aria-describedby= "basic-addon2"/>
              <select className='form-select' onChange={(e) => setEmail(email + e.target.value)} aria-label="email provider">
                <option value="@gmail.com">@gmail.com</option>
                <option value="@yahoo.com">@yahoo.com</option>
                <option value="@hotmail.com">@hotmail.com</option>
              </select>
              <span className="input-group-text" id="basic-addon2">@gmail.com</span>
            </div>
          </label>

          <br></br>
          <br></br>
          <br></br>

          <label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Subject:</span>
              <input 
                style = {{width: '70vw'}} 
                type= "text" 
                name= "subject" 
                className= "form-control" 
                placeholder= ""
                value = {subject}
                onChange = {(e) => setSubject(e.target.value)} //handle input change
                aria-label= "subject" 
                aria-describedby= "basic-addon1"/>
            </div>
          </label>

          <label>
            <div className="input-group">
            <span className="input-group-text">Message</span>
            <textarea 
              style = {{width: '70vw', height: '40vh'}} 
              name = "message" 
              className ="form-control"
              onChange = {(e) => setMessage(e.target.value)} //handle input change
              aria-label="With textarea"/>
            </div>
          </label>

          <br></br>
          
          <button
            className={sent?"btn btn-secondary":"btn btn-success"} 
            type="submit" 
            value="Send"
            onClick={() => setSent(true)}>
            Send
          </button>
        </form>
      </div>

      <div className="container mx-auto my-5">
        <h1 className="text-center mb-5 text-3xl font-bold">Contact Us</h1>

        <div className="flex flex-col items-center space-y-4">
          {/* Email */}
          <a
            href="mailto:official@example.com"
            className="flex items-center space-x-3 text-lg text-blue-500 hover:underline"
          >
            <i className="bi bi-envelope-fill text-2xl"></i>
            <span>GameNonStop@gmail.com</span>
          </a>

          {/* Telephone */}
          <a
            href="tel:+1234567890"
            className="flex items-center space-x-3 text-lg text-blue-500 hover:underline"
          >
            <i className="bi bi-telephone-fill text-2xl"></i>
            <span>+60 12-345-6789</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-lg text-blue-500 hover:underline"
          >
            <i className="bi bi-facebook text-2xl"></i>
            <span>GameNonStopFB</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-lg text-blue-500 hover:underline"
          >
            <i className="bi bi-instagram text-2xl"></i>
            <span>GameNonStopIG</span>
          </a>
        </div>
      </div>

    </div>
  )
}


export default Email;