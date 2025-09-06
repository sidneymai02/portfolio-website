import "../Pages-CSS/ContactMe.css";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: ""
  });
  const [status, setStatus] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const siteKey = import.meta.env.VITE_SITE_KEY;
  console.log("Loaded reCAPTCHA site key:", siteKey);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      setStatus("Spam detected. Submission blocked.");
      return;
    }

    const isFormValid =
      formData.name.trim() &&
      formData.email.trim() &&
      formData.message.trim();

    if (!isFormValid) {
      setStatus("Please complete all fields before submitting.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    const token = recaptchaRef.current?.getValue();
    if (!token) {
      setStatus("Please complete the CAPTCHA.");
      return;
    }

    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/mandawnr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          "g-recaptcha-response": token
        })
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", honeypot: "" });
        recaptchaRef.current?.reset();
      } else {
        setStatus("Failed to send message.");
      }
    } catch {
      setStatus("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="contact-container">
      <section className="contact-header">
        <h1>Contact Me</h1>
        <p>
          I'd love to hear from you! Whether it's about software engineering,
          cybersecurity, or collaboration opportunities, feel free to reach out.
        </p>
      </section>

      <section className="contact-form">
        <form onSubmit={handleSubmit}>
          {/* Honeypot Field */}
          <div style={{ display: "none" }}>
            <label htmlFor="honeypot">Do not fill this out</label>
            <input
              type="text"
              id="honeypot"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              autoComplete="off"
              tabIndex={-1}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Your message"
              required
            ></textarea>
          </div>

          <div className="form-group">
            {siteKey && (
              <ReCAPTCHA
                sitekey={siteKey}
                ref={recaptchaRef}
                onChange={() => {}}
              />
            )}
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="submit-btn"
              disabled={status === "Sending..."}
            >
              {status === "Sending..." ? "Sending..." : "Send"}
            </button>
            {status && status !== "Sending..." && (
              <p className="status-message">{status}</p>
            )}
          </div>
        </form>
      </section>
    </div>
  );
}

export default ContactMe;
