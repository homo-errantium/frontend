import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Checkbox.scss'

const Checkbox = ({ checkboxText, checkboxId, onClick }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    onClick(isChecked)
  }
  return (
    <div className="checkbox__container">
      <label className="checkbox__label" htmlFor={checkboxId}>
        <input
          type="checkbox"
          id={checkboxId}
          className="checkbox__input"
          onChange={handleCheckboxChange}
          checked={isChecked}
        />
        <span className="checkbox__text">{checkboxText}</span>
      </label>
    </div>
  )
}

Checkbox.propTypes = {
  checkboxText: PropTypes.string.isRequired,
  checkboxId: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

Checkbox.defaultProps = {
  onClick: () => {},
}

export default Checkbox
