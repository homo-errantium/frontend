import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './PopupLogin.scss'
// import PopupСontainer from '../PopupContainer/PopupContainer'
// import LoginForm from '../Login/LoginForm/LoginForm'
// import FormTitle from '../Register/FormTitle/FormTitle'
// import FormRedirection from '../Register/FormRedirection/FormRedirection'
// import Login from '../../Login/Login'
import LoginImg from '../../../img/popups/login.svg'

const PopupLogin = ({ isOpen, onClose /* onLogin */ }) => {
  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        onClose()
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [onClose])

  return (
    <div className={`popup-login popup ${isOpen ? `popup_opened` : ''}`}>
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
          </div>
        </div>
        <button
          className="popup__btn-close"
          type="button"
          onClick={onClose}
          label="button"
        />
      </div>
    </div>
  )
  // <PopupСontainer
  //   isOpen={isOpen}
  //   onClose={onClose}
  //   popupName="popup-login"
  //   element={<Login onLogin={onLogin} isOpen={isOpen} />}
  // element={
  // 	<>
  // 		<LoginForm buttonText="Войти" onSubmit={onLogin} />
  // 		<a href="_blank" className="login__restore-password">
  // 			Не помню пароль
  // 		</a>
  // 		<FormTitle page="login" greeting="Привет!" />
  // 		<FormRedirection
  // 			page="login"
  // 			button="Зарегистрироваться"
  // 			path="/signup"
  // 		/>
  // 	</>
  // }
  // />
  // )
}

PopupLogin.propTypes = {
  // onLogin: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default PopupLogin
