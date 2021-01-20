import PropTypes from 'prop-types';
import styled from 'styled-components';

const PageTitle = ({ title, subtitle }) => (
  <div className="page-title">
    <h1 className="heading-1">{title}</h1>
    <hr className="divider" />
    <h4 className="heading-4">{subtitle}</h4>
  </div>
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default PageTitle;
