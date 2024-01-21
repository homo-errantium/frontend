import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './PopupLogin.scss'
import LoginForm from '../../Login/LoginForm/LoginForm'
import LoginImg from '../../../img/popups/login.svg'

const PopupLogin = ({ isOpen, onClose, onLogin, handleRegisterPopupOpen }) => {
  // Для закрытия попапа по клавише escape и на фон
  useEffect(() => {
    const closeEsc = e => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        onClose()
      }
    }

    const closeMouseDown = e => {
      if (e.target.classList.contains('popup-login_opened')) {
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
    <div className={`popup-login ${isOpen ? `popup-login_opened` : ''}`}>
      <div className="popup-login__container">
        <div className="popup-login__internal-container">
          <div className="popup-login__image-container">
            <img
              alt="Девушка с ноутбуком"
              src={LoginImg}
              className="popup-login__image"
            />
            <span className="popup-login__image-text">
              Чтобы сохранить резюме, необходимо войти или зарегистрироваться
            </span>
          </div>
          <div className="popup-login__form-container">
            <h1 className="popup-login__form-title">Вход</h1>
            <LoginForm
              buttonText="Войти"
              onSubmit={onLogin}
              isOpen={isOpen}
              popup
            />
            <a href="_blank" className="popup-login__restore-password">
              Не помню пароль
            </a>
            <button
              className="popup-login__btn"
              type="button"
              onClick={() => {
                onClose()
                handleRegisterPopupOpen()
              }}
            >
              Зарегистрироваться
            </button>
          </div>
        </div>
        <button
          className="popup-login__btn-close"
          type="button"
          onClick={onClose}
          label="button"
        />
      </div>
    </div>
  )
}

PopupLogin.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleRegisterPopupOpen: PropTypes.func.isRequired,
}

export default PopupLogin
