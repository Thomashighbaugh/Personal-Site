import Mail from './icons/mail.svg'
import Github from './icons/github.svg'
import Linkedin from './icons/linkedin.svg'
import Twitter from './icons/twitter.svg'

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
      <SocialSvg className="w-16 h-16 p-3 transition-transform ease-linear transform rotate-0 bg-gray-700 border-gray-700 border-dashed fill-current border-12 rounded-xl sm:ml-4 hover:-rotate-8 text-gray-50 dark:text-gray-500 dark:bg-gray-50 bg-hero-morphing-diamonds-dark " />
    </a>
  )
}

export default SocialIcon
