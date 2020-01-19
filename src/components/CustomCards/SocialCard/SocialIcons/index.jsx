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
      <button> <FaLinkedin size={100}  id="linkedin"/></button>
      </a>
      <a className="social-button" href="https://github.com/Thomashighbaugh">
       <button > <FaGithubSquare size={100} id="github"/></button>
      </a>
     <a className="social-button" href="https://dribbble.com/thighbaugh">
       <button > <FaDribbble size={100}  id="dribbble" /></button>
      </a>
  </section>
      <section>
      <a className="social-button" href="https://github.com/thomasleonhighbaugh">
       <button><FaGitlab size={100}  id="gitlab" /></button>
      </a>
      <a className="social-button" href="https://twitter.com/thomasleonhighbaugh">
        <button><FaTwitterSquare size={100}  id="twitter"/></button>
      </a>
      <a className="social-button" href="https://instagram.com/tlh-resurgens">
        <button><FaInstagram size={100}  id="instagram"/></button>
      </a></section>
    </div>
  );
};

export default SocialIcons;
