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
      <a href="https://www.linkedin.com/in/thomas-leon-highbaugh">
        <FaLinkedin size={65} className="nav-btn"/>
      </a>
      <a href="https://github.com/Thomashighbaugh">
        <FaGithubSquare size={65} className="nav-btn"/>
      </a>
      <a href="https://dribbble.com/thighbaugh">
        <FaDribbble size={65} className="nav-btn"/>
      </a>
      <div> </div>
      <a href="https://github.com/thomasleonhighbaugh">
        <FaGitlab size={65} className="nav-btn"/>
      </a>
      <a href="https://twitter.com/thomasleonhighbaugh">
        <FaTwitterSquare size={65} className="nav-btn"/>
      </a>
      <a href="https://instagram.com/tlh-resurgens">
        <FaInstagram size={65} className="nav-btn"/>
      </a>
    </div>
  );
};

export default SocialIcons;
