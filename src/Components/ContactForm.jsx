import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
    return (
        <div className="contact-form">
            <form>
                <label>Your Name</label>
                <input type="text" />
                <label>Email</label>
                <input type="email" />
                <label>Subject</label>
                <input type="text" />
                <label>Message</label>
                <textarea
                    rows="6"
                    placeholder="Type your message here"
                ></textarea>
                <button className="btn">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
