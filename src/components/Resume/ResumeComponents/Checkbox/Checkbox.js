// import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Checkbox.scss'

const Checkbox = ({
  checkboxText,
  checkboxId,
  onClick,
  name,
  checkboxValues,
  handleCheckboxChange,
}) => (
  // const [isChecked, setIsChecked] = useState(false)

  // const handleCheckboxChange = () => {
  //   setIsChecked(!isChecked)
  //   onClick(isChecked)
  // }
  <div className="checkbox__container">
    <label className="checkbox__label" htmlFor={checkboxId}>
      <input
        name={name}
        type="checkbox"
        onClick={onClick}
        id={checkboxId}
        className="checkbox__input"
        onChange={handleCheckboxChange}
        checked={checkboxValues[name]}
      />
      <span className="checkbox__text">{checkboxText}</span>
    </label>
  </div>
)

Checkbox.propTypes = {
  checkboxText: PropTypes.string.isRequired,
  checkboxId: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  handleCheckboxChange: PropTypes.func,
  checkboxValues: PropTypes.shape({
    checkbox: PropTypes.bool,
  }),
  name: PropTypes.string,
}

Checkbox.defaultProps = {
  onClick: () => {},
  handleCheckboxChange: () => {},
  checkboxValues: {},
  name: '',
}

export default Checkbox
