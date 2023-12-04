import React from "react";
import ContactUs from "../../components/Contackus/ContactUs";
import Nav from "../../components/Nav/nav";
import Header from "../../components/header/header";
import "./contact.scss";

const Contact = () => {
  return (
    <>
      <Header />
      <Nav />
      <div className="contactContainer">
        <ContactUs />
      </div>{" "}
    </>
  );
};

export default Contact;
