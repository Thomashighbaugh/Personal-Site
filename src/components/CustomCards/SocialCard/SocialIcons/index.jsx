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
    <div style={{color: '#4df', background: '#fff'}} className="socialIcons">
      <a
         href={contacts.linkedin}>
                    <FaLinkedin size={75} />
      </a>
      <a
         href={contacts.github}>
                                    <FaGithubSquare className="socials" size={75} />
                      </a>
      <a
         href={contacts.dribbble}>

                    <FaDribbble className="socialIcons" size={75}/>

      </a>
      <br/>
      <a
         href={contacts.gitlab}>

                    <FaGitlab size={75} />

      </a>
      <a
         href={contacts.twitter}>

                    <FaTwitterSquare size={75}/>

      </a>
      <a

         href={contacts.instagram}>

                    <FaInstagram size={75}/>

      </a>
    </div>
  )
};

export default SocialIcons

