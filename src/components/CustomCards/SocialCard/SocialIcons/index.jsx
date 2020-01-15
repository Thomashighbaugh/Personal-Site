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
      <button> <FaLinkedin size={75}  id="linkedin"/></button>
      </a>
      <a className="social-button" href="https://github.com/Thomashighbaugh">
       <button > <FaGithubSquare size={75} id="github"/></button>
      </a>
     <a className="social-button" href="https://dribbble.com/thighbaugh">
       <button > <FaDribbble size={75}  id="dribbble" /></button>
      </a>
  </section>
      <section>
      <a className="social-button" href="https://github.com/thomasleonhighbaugh">
       <button><FaGitlab size={75}  id="gitlab" /></button>
      </a>
      <a className="social-button" href="https://twitter.com/thomasleonhighbaugh">
        <button><FaTwitterSquare size={75}  id="twitter"/></button>
      </a>
      <a className="social-button" href="https://instagram.com/tlh-resurgens">
        <button><FaInstagram size={75}  id="instagram"/></button>
      </a></section>
      <hr/>
    </div>
  );
};

export default SocialIcons;
