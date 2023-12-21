import React from 'react'
import PropTypes from 'prop-types'
import './PopupResumeName.scss'
import PopupСontainer from '../PopupContainer/PopupContainer'
import ResumeName from './ResumeName/ResumeName'

function PopupConfirmationExit({
  isOpen,
  onClose,
  values,
  setValues,
  setArrValues,
  arrValues,
}) {
  return (
    <PopupСontainer
      isOpen={isOpen}
      onClose={onClose}
      popupName="popup-confirmation"
      closeButtonBlack
      element={
        <ResumeName
          values={values}
          setValues={setValues}
          setArrValues={setArrValues}
          onClose={onClose}
          arrValues={arrValues}
        />
      }
    />
  )
}

PopupConfirmationExit.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setValues: PropTypes.func.isRequired,
  setArrValues: PropTypes.func.isRequired,
  arrValues: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
        PropTypes.arrayOf(
          PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.objectOf(
              PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
                PropTypes.bool,
              ])
            ),
          ])
        ),
      ])
    )
  ),
  values: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.objectOf(
            PropTypes.oneOfType([
              PropTypes.string,
              PropTypes.number,
              PropTypes.bool,
            ])
          ),
        ])
      ),
    ])
  ),
}

PopupConfirmationExit.defaultProps = {
  arrValues: [],
  values: {},
}

export default PopupConfirmationExit
