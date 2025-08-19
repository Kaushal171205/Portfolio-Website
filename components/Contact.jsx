import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../src/styling/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0jl43vb", 
        "template_cwiraan", 
        {
          name: formData.name,
          email: formData.email,
          title: formData.title,
          message: formData.message,
        },
        "-qRVAHvOcCPGmJl9m" 
      )
      .then(
        () => {
          setStatus("✅ Message Sent Successfully!");
          setFormData({ name: "", email: "", title: "", message: "" });
        },
        (error) => {
          console.error(error.text);
          setStatus("❌ Failed to send. Please try again.");
        }
      );
  };

  return (
    <section className="connect-section" id="contact">
      <h1 className="connect-title">Connect With Me</h1>
      <form className="connect-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Subject"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
      {status && <p className="status">{status}</p>}
    </section>
  );
};

export default Contact;
