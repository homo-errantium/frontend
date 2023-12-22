import './ConfirmationDelete.scss'
import { useNavigate } from 'react-router'
import PropTypes from 'prop-types'
import TrashIcon from '../../../../img/popups/trash-icon-red.svg'
import CloseIcon from '../../../../img/popups/close-icon-black.svg'

function ConfirmationDelete({ onClose }) {
  const resumeNumber = 1 // эту переменную надо привязать в конкретным резюме
  const navigate = useNavigate()
  return (
    <div className="confirmation-delete">
      <p className="confirmation-delete__text">
        {`Вы действительно хотите удалить резюме ${resumeNumber} без возможности восстановления?`}
      </p>
      <div className="confirmation-delete__buttons">
        <button
          className="confirmation-delete__button confirmation-delete__button_delete"
          type="button"
          label="button"
          onClick={() => {
            navigate('/my-profile')
            onClose()
          }}
        >
          <img src={TrashIcon} alt="trash-icon" />
          Удалить
        </button>

        <button
          className="confirmation-delete__button confirmation-delete__button_cancel"
          type="button"
          label="button"
          onClick={() => {
            onClose()
          }}
        >
          Отменить
        </button>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="confirmation-delete__close-button link"
      >
        <img
          src={CloseIcon}
          alt="крестик"
          className="confirmation-delete__close-button-icon"
        />
      </button>
    </div>
  )
}

ConfirmationDelete.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default ConfirmationDelete
