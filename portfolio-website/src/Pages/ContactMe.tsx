import "../Pages-CSS/ContactMe.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

function ContactMe() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const isValidEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();
        if (!isFormValid) {
            setStatus("Please complete all fields before submitting.");
            return;
        }

        if (!isValidEmail(formData.email)) {
            setStatus("Please enter a valid email address.");
            return;
        }

        setStatus("Sending...");

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/send-email`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
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