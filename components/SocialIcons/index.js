import Mail from "./mail.svg";
import Github from "./github.svg";
import Linkedin from "./linkedin.svg";
import Twitter from "./twitter.svg";

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

const SocialIcon = ({ kind, href, size = 2 }) => {
  const SocialSvg = components[kind];

  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`social-icons fill-current text-gray-500 btn dark:text-gray-300 hover:text-blue-500 dark:hover:text-gray-50 border-2 border-gray-400 hover:border-blue-500 dark:hover:border-gray-50 bg-gray-50 dark:bg-gray-800 p-1 rounded-xl h-${size} w-${size} max-h-${size} max-w-${size}`}
      />
    </a>
  );
};

export default SocialIcon;
