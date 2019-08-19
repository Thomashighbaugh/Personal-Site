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
        <FaLinkedin size={80} />
      </a>
      <a href="https://github.com/Thomashighbaugh">
        <FaGithubSquare className="socials" size={80} />
      </a>
      <a href="https://dribbble.com/thighbaugh">
        <FaDribbble className="socialIcons" size={80} />
      </a>
      <div> </div>
      <a href="https://github.com/thomasleonhighbaugh">
        <FaGitlab size={80} />
      </a>
      <a href="https://twitter.com/thomasleonhighbaugh">
        <FaTwitterSquare size={80} />
      </a>
      <a href="https://instagram.com/tlh-resurgens">
        <FaInstagram size={80} />
      </a>
    </div>
  );
};

export default SocialIcons;
