import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer-text">
        Made with ❤️ by Kinana Bohra
      </span>
      <a
        href="https://www.linkedin.com/in/kinanabohra"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
        title="LinkedIn Profile"
      >
        <FaLinkedin size={20} />
      </a>
      <a
        href="https://github.com/kinanabohra"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
        title="GitHub Profile"
      >
        <FaGithub size={20} />
      </a>
    </footer>
  );
};

export default Footer;
