import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Toggle.scss'

const Toggle = ({ checkboxText, checkboxId, onClick }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleToggleChange = () => {
    setIsChecked(!isChecked)
    onClick(isChecked)
  }
  return (
    <div className="toggle__container">
      <label className="toggle__label" htmlFor={checkboxId}>
        <input
          type="checkbox"
          id={checkboxId}
          className="toggle__input"
          onChange={handleToggleChange}
          checked={isChecked}
        />
        <span className="toggle__text">{checkboxText}</span>
      </label>
    </div>
  )
}

Toggle.propTypes = {
  checkboxText: PropTypes.string.isRequired,
  checkboxId: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

Toggle.defaultProps = {
  onClick: () => {},
}

export default Toggle
