"use client"; // This makes the component a Client Component

import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit" className="send-button" style={{ marginTop: '10px' }}>
          Send Message
        </button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <h2>Follow Us</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-button facebook">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-button twitter">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.linkedin.com/in/nimrah-n-m-j-a662622b5/" target="_blank" rel="noopener noreferrer" className="social-button linkedin">
            <FaLinkedin size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-button instagram">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>

      <style jsx>{`
        .send-button {
          background: linear-gradient(90deg, #ff7e5f, #feb47b); /* Gradient color */
          color: white;
          border: none;
          border-radius: 25px;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          transition: transform 0.3s, background 0.3s;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .send-button:hover {
          transform: scale(1.05);
          background: linear-gradient(90deg, #feb47b, #ff7e5f); /* Reverse gradient on hover */
        }

        .send-button:active {
          transform: scale(0.95);
        }

        .social-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          transition: transform 0.3s;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .facebook {
          background-color: #3b5998;
        }

        .twitter {
          background-color: #1da1f2;
        }

        .linkedin {
          background-color: #0077b5;
        }

        .instagram {
          background-color: #e1306c;
        }

        .social-button:hover {
          transform: scale(1.1);
          filter: brightness(90%);
        }

        .social-button:active {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
}
