import React from 'react'
import PropTypes from 'prop-types'
import './PopupConfirmationExit.scss'
import PopupСontainer from '../PopupContainer/PopupContainer'
import Confirmation from './ComfirmationExit/ConfirmationExit'

function PopupConfirmationExit({ isOpen, onClose }) {
  return (
    <PopupСontainer
      isOpen={isOpen}
      onClose={onClose}
      popupName="popup-confirmation-exit"
      element={<Confirmation onClose={onClose} />}
    />
  )
}

PopupConfirmationExit.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default PopupConfirmationExit
