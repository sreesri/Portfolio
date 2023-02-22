import React , { useRef }from "react";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iayln6g', 'template_bk29kz8', form.current, '72nyDemb4pMAPE8kj')
      .then((result) => {
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="Contact">
      <h5>Get in touch</h5>
      <h2>Contact ME</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__icon"/>
            <h4>Email me</h4>
            <h5>dev.shriram.ms@gmail.com</h5>
            <a href="mailto:sri59776@gmail.com" target={"_blank"}>Send an Email</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp  className="contact__icon"/>
            <h4>Whatsapp</h4>
            {/* <h5>9655763218</h5> */}
            <a href="https://wa.me/919655763218?text=Hi" target={"_blank"}>Send a Whatsapp</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your full name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea rows={5} name="message" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
