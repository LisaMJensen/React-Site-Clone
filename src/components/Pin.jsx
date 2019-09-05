import React from 'react';
import PropTypes from 'prop-types';

function Pin(props) {
  return (
    <div>
      <div>{props.image}</div>
      <h3>{props.title}</h3>
      <h5>{props.link}</h5>
    </div>
  )
}

Pin.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  image: PropTypes,
};

export default Pin;