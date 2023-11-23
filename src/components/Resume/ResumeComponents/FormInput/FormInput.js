import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './FormInput.scss'
import Tip from '../../Tip/Tip'

const FormInput = ({ label, tip, tipText, extraInputClass }) => (
  <div className="form-input">
    <div className="form-input__label-container">
      <label className="form-input__label" htmlFor="form-input">
        {label}
      </label>
      {tip && <Tip text={tipText} />}
    </div>
    <input
      id="form-input"
      className={classNames(
        'form-input__field',
        extraInputClass && `form-input__field_${extraInputClass}`
      )}
      type="text"
    />
  </div>
)
FormInput.propTypes = {
  label: PropTypes.node.isRequired,
  tip: PropTypes.bool,
  tipText: PropTypes.node,
  extraInputClass: PropTypes.string,
}

FormInput.defaultProps = {
  tip: false,
  tipText: '',
  extraInputClass: '',
}

export default FormInput
