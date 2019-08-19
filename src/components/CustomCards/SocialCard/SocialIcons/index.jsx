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
                    <FaLinkedin size={50} />
      </a>
      <a
         href={contacts.github}>
                                    <FaGithubSquare className="socials" size={50} />
                      </a>
      <a
         href={contacts.dribbble}>

                    <FaDribbble className="socialIcons" size={50}/>

      </a>
      <br/>
      <a
         href={contacts.gitlab}>

                    <FaGitlab size={50} />

      </a>
      <a
         href={contacts.twitter}>

                    <FaTwitterSquare size={50}/>

      </a>
      <a

         href={contacts.instagram}>

                    <FaInstagram size={50}/>

      </a>
    </div>
  )
};

export default SocialIcons

