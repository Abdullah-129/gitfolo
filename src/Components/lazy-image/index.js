import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LazyImage = ({ placeholder, src, alt, ...rest }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = src;

    imageToLoad.onload = () => {
      setLoading(false);
    };
  }, [src]);

  return (
    <React.Fragment>
      {loading ? React.cloneElement(placeholder, { alt }) : <img src={src} alt={alt} {...rest} />}
    </React.Fragment>
  );
};

LazyImage.propTypes = {
  placeholder: PropTypes.node,
  alt: PropTypes.string,
  src: PropTypes.string,
};

export default LazyImage;
