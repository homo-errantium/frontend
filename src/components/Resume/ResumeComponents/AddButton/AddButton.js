import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './AddButton.scss'

const AddButton = ({ disabled }) => (
  <button
    className={classNames(
      'add-button',
      disabled ? 'add-button_inactive' : 'link'
    )}
    type="button"
    disabled={disabled}
    onClick={() => console.log('I am alive!')}
  >
    + Добавить
  </button>
)

AddButton.propTypes = {
  disabled: PropTypes.bool,
}

AddButton.defaultProps = {
  disabled: false,
}

export default AddButton
