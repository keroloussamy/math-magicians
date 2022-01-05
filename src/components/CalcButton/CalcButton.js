import React from 'react';
import PropTypes from 'prop-types';

const CalcButton = (props) => {
  const { className, onClickHandler, name } = props;
  return (
    <button type="button" className={className} onClick={onClickHandler}>{name}</button>
  );
};

CalcButton.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default CalcButton;
