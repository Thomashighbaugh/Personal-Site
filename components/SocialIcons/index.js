import Mail from './mail.svg'
import Github from './github.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
}

const SocialIcon = ({ kind, href, size = 2 }) => {
  const SocialSvg = components[kind]

  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      <span className="sr-only">{kind}</span>
      <SocialSvg className="w-16 h-16 rounded-xl sm:ml-4  transform rotate-0 hover:-rotate-8 fill-current text-gray-50 dark:text-gray-500 bg-gray-500 dark:bg-gray-50 bg-hero-morphing-diamonds-dark transition-transform ease-linear  border-gray-400 border-2 " />
    </a>
  )
}

export default SocialIcon
