/* eslint-disable react/prop-types */
// import React from 'react'
import classNames from 'classnames'
import './PopupCopyLink.scss'

function PopupCopyLink({ popupCopyLink }) {
  return (
    <div
      className={classNames(
        'popup-copy-link',
        popupCopyLink && 'popup-copy-link_opened'
      )}
    >
      <p className="popup-copy-link__text">Ссылка скопирована</p>
    </div>
  )
}

export default PopupCopyLink
