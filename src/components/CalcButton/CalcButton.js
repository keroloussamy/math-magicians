import React from 'react';
import PropTypes from 'prop-types';

class CalcButton extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { className, onClickHandler, name } = this.props;
    return (
      <button type="button" className={className} onClick={onClickHandler}>{name}</button>
    );
  }
}

CalcButton.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default CalcButton;
