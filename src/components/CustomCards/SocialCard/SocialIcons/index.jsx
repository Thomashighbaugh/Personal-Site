import React from "react"
import {
  FaLinkedin,
  FaGithubSquare,
  FaDribbble,
  FaGitlab,
  FaTwitterSquare,
  FaInstagram
} from "react-icons/fa"
import '../../../../../socials'

const SocialIcons = (contacts) => {
  return (
    <div style={{color: '#4df', background: '#fff', margin: '2rem'}} className="socialIcons">
      <a
         href={contacts.linkedin}>
                    <FaLinkedin size={120} />
      </a>
      <a
         href={contacts.github}>
                                    <FaGithubSquare className="socials" size={120} />
                      </a>
      <a
         href={contacts.dribbble}>

                    <FaDribbble className="socialIcons" size={120}/>

      </a>
      <br/>
      <a
         href={contacts.gitlab}>

                    <FaGitlab size={120} />

      </a>
      <a
         href={contacts.twitter}>

                    <FaTwitterSquare size={120}/>

      </a>
      <a

         href={contacts.instagram}>

                    <FaInstagram size={120}/>

      </a>
    </div>
  )
};

export default SocialIcons

