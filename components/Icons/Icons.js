import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import {FiGithub, FiLinkedin, FiDribbble} from 'react-icons/fi'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Icons = () => (
  <div className="social-media-icons">
    <a
      href="https://www.linkedin.com/in/thomas-leon-highbaugh"
      target="blank"
      rel="noopener noreferrer"
    >
      <FiLinkedin />
    </a>
    <a
      href="https://github.com/Thomashighbaugh"
      target="blank"
      rel="noopener noreferrer"
    >
      <FiGithub />
    </a>
      <a
          href="https://dribbble.com/thighbaugh"
          target="blank"
          rel="noopener noreferrer"
          >
          <FiDribbble/>
      </a>
  </div>
);

export default Icons;
