import { useState } from "react";
import "../assets/css/contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("❌ Please fill all required fields");
      return;
    }

    alert("✅ Message Sent Successfully!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <span className="contact-tag">CONTACT ME</span>
      <h2 className="contact-title">Have a Project in Mind?</h2>
      <p className="contact-desc">
       Looking for a reliable WordPress or full-stack developer?
I help businesses build, optimize, and maintain high-performing websites with a strong focus on performance, security, and scalability.
Let’s discuss your project and see how I can help.


      </p>

      <div className="contact-wrapper">
        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
          />

          <textarea
            placeholder="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* INFO */}
        <div className="contact-info">
          <div className="info-box">
            <span><FaMapMarkerAlt /></span>
            <p>
              <strong>Address:</strong><br />
              Chandigarh
            </p>
          </div>

          <div className="info-box">
            <span><FaPhoneAlt /></span>
            <p>
              <strong>Phone:</strong><br />+91 9996727653  +91 9034527653
            </p>
          </div>

          <div className="info-box">
            <span><FaEnvelope /></span>
            <p>
              <strong>Email:</strong><br />daljeetsingh241@gmail.com
            </p>
          </div>

          <div className="info-box">
            <span><FaGlobe /></span>
            <p>
              <strong>Website:</strong><br />yoursite.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
