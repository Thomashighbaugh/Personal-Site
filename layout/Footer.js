import Icons from "../components/Icons/Icons";
import PropTypes from "prop-types";

const Footer = ({ footerVisibility }) => (
  <footer className={footerVisibility ? "footer footer__show" : "footer"}>
    <p>
      &copy; 2020{" "}
      <a
        href="https://github.com/Thomashighbaugh"
        target="_blank"
        rel="noopener noreferrer"
        title="ClareBee GitHub Profile"
      >
        {" "}
        Thomas Leon Highbaugh{" "}
      </a>
    </p>
    <Icons />
  </footer>
);

Footer.propTypes = {
  footerVisibility: PropTypes.bool.isRequired,
};
export default Footer;
