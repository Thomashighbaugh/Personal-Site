import React from 'react';
import {
  FaLinkedin,
  FaGithubSquare,
  FaDribbble,
  FaGitlab,
  FaTwitterSquare,
  FaInstagram,
} from 'react-icons/fa';

const SocialIcons = contacts => {
  return (
    <div className="socialIcons">
  <section>
      <a className="social-button" href="https://www.linkedin.com/in/thomas-leon-highbaugh">
        <FaLinkedin size={120}  id="linkedin"/>
      </a>
      <a className="social-button" href="https://github.com/Thomashighbaugh">
        <FaGithubSquare size={120}  id="github"/>
      </a>
     <a className="social-button" href="https://dribbble.com/thighbaugh">
        <FaDribbble size={120}  id="dribbble" />
      </a>
  </section>
      <section>
      <a className="social-button" href="https://github.com/thomasleonhighbaugh">
        <FaGitlab size={120}  id="gitlab" />
      </a>
      <a className="social-button" href="https://twitter.com/thomasleonhighbaugh">
        <FaTwitterSquare size={120}  id="twitter"/>
      </a>
      <a className="social-button" href="https://instagram.com/tlh-resurgens">
        <FaInstagram size={120}  id="instagram"/>
      </a></section>
    </div>
  );
};

export default SocialIcons;
