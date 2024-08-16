import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Email.css"

const Email = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

 
  const sendEmail = (e) => {
    e.preventDefault();

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
  };

  return (
    <div className="container-lg">
      <form ref={form} onSubmit={sendEmail}>
      <label><div className="input-group mb-3">
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
      </div></label>
      <br></br>
      <label><div className="input-group mb-3">
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
      <span className="input-group-text" id="basic-addon2">@gmail.com</span>
      </div></label>
      <br></br>
      <label><div className="input-group">
      <span className="input-group-text">Message</span>
      <textarea 
        style = {{width: '70vw', height: '40vh'}} 
        name = "message" 
        className ="form-control"
        onChange = {(e) => setMessage(e.target.value)} //handle input change
        aria-label="With textarea"/>
      </div></label>
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
  )
}


export default Email