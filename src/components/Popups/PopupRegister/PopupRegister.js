import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import './PopupRegister.scss'
import RegistrationForm from '../../Register/RegistrationForm/RegistrationForm'
import LoginImg from '../../../img/popups/login.svg'

const PopupRegister = ({ isOpen, onClose, onLogin }) => {
  // Для закрытия попапа по клавише escape и на фон
  useEffect(() => {
    const closeEsc = e => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        onClose()
      }
    }

    const closeMouseDown = e => {
      if (e.target.classList.contains('popup-register_opened')) {
        onClose()
      }
    }
    window.addEventListener('keydown', closeEsc)
    window.addEventListener('mousedown', closeMouseDown)
    return () => {
      window.removeEventListener('keydown', closeEsc)
      window.removeEventListener('mousedown', closeMouseDown)
    }
  }, [onClose])

  return (
    <div className={`popup-register ${isOpen ? `popup-register_opened` : ''}`}>
      <div className="popup-register__container">
        <div className="popup-register__internal-container">
          <div className="popup-register__image-container">
            <img
              alt="Девушка с ноутбуком"
              src={LoginImg}
              className="popup-register__image"
            />
            <span className="popup-register__image-text">
              Чтобы сохранить резюме, необходимо войти или зарегистрироваться
            </span>
          </div>
          <div className="popup-register__form-container">
            <h1 className="popup-register__form-title">Регистрация</h1>
            <RegistrationForm
              buttonText="Зарегистрироваться"
              onSubmit={onLogin}
              isOpen={isOpen}
              popup
            />
            <p className="popup-register__text">
              Уже есть аккаунт?{' '}
              <button
                className="popup-register__btn"
                type="button"
                onClick={() => {
                  onClose()
                  onLogin()
                }}
              >
                Войти
              </button>
            </p>
          </div>
        </div>
        <button
          className="popup-register__btn-close"
          type="button"
          onClick={onClose}
          label="button"
        />
      </div>
    </div>
  )
}

PopupRegister.propTypes = {
  onLogin: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

PopupRegister.defaultProps = {
  onLogin: () => {},
}

export default PopupRegister
