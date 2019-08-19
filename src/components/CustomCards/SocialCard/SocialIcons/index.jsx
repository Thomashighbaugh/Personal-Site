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
    <div  className="socialIcons">
      <a
         href={contacts.linkedin}>
                    <FaLinkedin size={80} />
      </a>
      <a
         href={contacts.github}>
                                    <FaGithubSquare className="socials" size={80} />
                      </a>
      <a
         href={contacts.dribbble}>

                    <FaDribbble className="socialIcons" size={80}/>

      </a>
      <div> </div>
      <a
         href={contacts.gitlab}>

                    <FaGitlab size={80} />

      </a>
      <a
         href={contacts.twitter}>

                    <FaTwitterSquare size={80}/>

      </a>
      <a

         href={contacts.instagram}>

                    <FaInstagram size={80}/>

      </a>
    </div>
  )
};

export default SocialIcons

