import { useState } from "react";
import "../assets/css/contact.css";

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
      <span className="contact-tag">CONTACT US</span>
      <h2 className="contact-title">Have a Project?</h2>
      <p className="contact-desc">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
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
            <span>📍</span>
            <p>
              <strong>Address:</strong><br />
              198 West 21th Street, Suite 721 New York NY 10016
            </p>
          </div>

          <div className="info-box">
            <span>📞</span>
            <p>
              <strong>Phone:</strong><br />+1235 2355 98
            </p>
          </div>

          <div className="info-box">
            <span>✉️</span>
            <p>
              <strong>Email:</strong><br />info@yoursite.com
            </p>
          </div>

          <div className="info-box">
            <span>🌐</span>
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
