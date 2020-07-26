import PropTypes from 'prop-types';
const PictureSet = ({
  pictureName,
  styleSelector,
  id,
  altText,
  width,
  height,
}) => {
  return (
    <img
      className={styleSelector}
      width={width}
      height={height}
      src={require(`../../images/${pictureName}`)}
      alt={altText}
      id={id}
    />
  );
};

PictureSet.propTypes = {
  pictureName: PropTypes.string.isRequired,
  styleSelector: PropTypes.string,
  altText: PropTypes.string.isRequired,
  id: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default PictureSet;
