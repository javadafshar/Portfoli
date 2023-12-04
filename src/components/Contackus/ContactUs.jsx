import React, { useState } from "react";
import "./Contackus.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

///

const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_diq1aik",
        "template_mpzrgtm",
        form.current,
        "Ji2EfEJDmDG6h3yt4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactuscontainer">
      <form className="contactform" onSubmit={sendEmail} ref={form}>
        <h1>Contact Us</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your name"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Enter your message"
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      {/* Success message popup */}
      {showSuccessMessage && (
        <div className="success-popup">
          <p>Email sent successfully!</p>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
