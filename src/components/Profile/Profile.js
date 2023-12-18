import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Profile.scss'
import IMask from 'imask'
import classNames from 'classnames'
import Header from '../Header/Header'
import ImageUpload from './ImageUpload/ImageUpload'
import cvExampleOne from '../../img/cv-examples/cv-1.png'
import cvExampleTwo from '../../img/cv-examples/cv-2.svg'
import Cv from './Cv/Cv'

function Profile({
  isLoggedIn,
  deletePopupSetState,
  values,
  handleChange,
  errors,
}) {
  const nextPage = '/*'
  const [isProfileData, setIsProfileData] = useState(true)
  const [isContacts, setIsContacts] = useState(false)

  // МАСКИ ДЛЯ ПОЛЕЙ:
  const maskInput = (dataValue, options) => {
    const inputElements = document.querySelectorAll(`[mask="${dataValue}"]`) // ищем поля ввода по селектору с переданным значением data-атрибута
    if (!inputElements) return // если таких полей ввода нет, прерываем функцию
    inputElements.forEach(el => {
      // для каждого из полей ввода
      IMask(el, options) // инициализируем плагин imask для необходимых полей ввода с переданными параметрами маски
    })
  }
  const maskOptionsPhone = {
    mask: '+{7}(000)000-00-00',
  }

  useEffect(() => {
    maskInput('phone', maskOptionsPhone)
  })

  const maskOptionsDate = {
    mask: Date,
    min: new Date(1900, 0, 1),
  }
  useEffect(() => {
    maskInput('date', maskOptionsDate)
  })

  // ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК
  const openProfileData = () => {
    setIsContacts(false)
    setIsProfileData(true)
  }
  const openContacts = () => {
    setIsProfileData(false)
    setIsContacts(true)
  }

  // ПРИМЕРЫ ДАННЫХ ДЛЯ РЕЗЮМЕ
  const cvArray = [
    { id: 1, image: cvExampleOne, name: 'Резюме 1' },
    { id: 2, image: cvExampleTwo, name: 'Резюме 2' },
  ]

  // ОТКРЫТИЕ ДОПОЛНИТЕЛЬНЫХ ПОЛЕЙ ДЛЯ СМЕНЫ ПАРОЛЯ
  const [isEditPassword, setIsEditPassword] = useState(false)
  const handleCheckboxChange = () => {
    setIsEditPassword(!isEditPassword)
  }

  // ЛОГИКА СМЕНЫ ПАРОЛЯ
  const [passwordValues, setPasswordValues] = useState({})
  const [passwordErrors, setPasswordErrors] = useState({})
  const [isValid, setIsValid] = useState(false)

  const currentPassword = 'qwerty'

  const handlePreviousPasswordChange = evt => {
    const { name, value } = evt.target
    setPasswordValues({ ...passwordValues, [name]: value })
    setIsValid(evt.target.closest('form').checkValidity())
    if (name === 'previousPassword' && evt.target.value.length < 2) {
      setIsValid(false)
      setPasswordErrors({
        ...passwordErrors,
        previousPassword: 'Пароль должен иметь не менее 2 символов',
      })
    } else {
      setPasswordErrors({
        ...passwordErrors,
        [name]: evt.target.validationMessage,
      })
    }
  }
  const handlePasswordChange = evt => {
    const { name, value } = evt.target
    setPasswordValues({ ...passwordValues, [name]: value })
    setIsValid(evt.target.closest('form').checkValidity())
    if (name === 'newPassword' && evt.target.value.length < 2) {
      setIsValid(false)
      setPasswordErrors({
        ...passwordErrors,
        newPassword: 'Пароль должен иметь не менее 2 символов',
      })
    } else {
      setPasswordErrors({
        ...passwordErrors,
        [name]: evt.target.validationMessage,
      })
    }
  }

  const handlePasswordConfirmationChange = evt => {
    const { name, value } = evt.target
    setIsValid(evt.target.closest('form').checkValidity())
    if (name === 'confirmPassword' && evt.target.value.length < 1) {
      setIsValid(false)
      setPasswordErrors({
        ...passwordErrors,
        passwordConfirmation: 'Необходимо повторно ввести пароль',
      })
    } else {
      setPasswordValues({ ...passwordValues, [name]: value })
    }
  }

  const handleChangePasswordSubmit = e => {
    e.preventDefault()
    if (passwordValues.newPassword !== passwordValues.passwordConfirmation) {
      setIsValid(false)
      setPasswordErrors({
        ...passwordErrors,
        passwordConfirmation: 'Пароли не совпадают',
      })
    } else if (passwordValues.previousPassword !== currentPassword) {
      setIsValid(false)
      setPasswordErrors({
        ...passwordErrors,
        passwordConfirmation: 'Старый пароль указан неверно',
      })
    } else {
      setPasswordErrors({
        ...passwordErrors,
        passwordConfirmation: '',
      })
      console.log('alright')
    }
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} nextPage={nextPage} />
      <main className="profile">
        <h1 className="profile__title">Личный кабинет</h1>
        <div className="profile__page-layout">
          <div className="profile__personal-data">
            <div className="profile__menu-buttons">
              <button
                className={classNames(
                  'profile__menu-button',
                  isProfileData && 'profile__menu-button_active'
                )}
                type="button"
                onClick={openProfileData}
              >
                Профиль
              </button>
              <button
                className={classNames(
                  'profile__menu-button',
                  isContacts && 'profile__menu-button_active'
                )}
                type="button"
                onClick={openContacts}
              >
                Контакты
              </button>
            </div>
            <div className="profile__personal-data-container">
              {isProfileData && (
                <>
                  <div className="profile__photo">
                    <ImageUpload />
                  </div>
                  <div className="profile__personal-data-form">
                    <label htmlFor="name" className="profile__input-label">
                      Имя
                      <input
                        name="name"
                        type="text"
                        id="name"
                        value={values.name}
                        className="profile__input"
                        onChange={handleChange}
                      />
                      {errors && (
                        <span className="form-input__input-error">
                          {errors.name}
                        </span>
                      )}
                    </label>

                    <label htmlFor="surname" className="profile__input-label">
                      Фамилия
                      <input
                        name="surname"
                        type="text"
                        id="surname"
                        className="profile__input"
                        value={values.surname}
                        onChange={handleChange}
                      />
                      {errors && (
                        <span className="form-input__input-error">
                          {errors.surname}
                        </span>
                      )}
                    </label>
                    <div className="profile__double-input-container">
                      <label
                        htmlFor="birthday"
                        className="profile__input-label profile__input-label_double-short"
                      >
                        Дата рождения
                        <input
                          name="birthday"
                          type="text"
                          id="birthday"
                          className="profile__input"
                          placeholder="ДД.ММ.ГГГГ"
                          value={values.birthday}
                          onChange={handleChange}
                          mask="date"
                        />
                        {errors && (
                          <span className="form-input__input-error">
                            {errors.birthday}
                          </span>
                        )}
                      </label>
                      <label
                        htmlFor="city"
                        className="profile__input-label profile__input-label_double-long"
                      >
                        Город
                        <input
                          name="city"
                          type="text"
                          id="city"
                          className="profile__input"
                          value={values.city}
                          onChange={handleChange}
                        />
                        {errors && (
                          <span className="form-input__input-error">
                            {errors.city}
                          </span>
                        )}
                      </label>
                    </div>
                    <label htmlFor="password" className="profile__input-label">
                      Пароль
                      <input
                        name="password"
                        type="password"
                        id="password"
                        className="profile__input"
                        value={currentPassword}
                        readOnly
                        disabled={isEditPassword}
                      />
                      <div className="profile__checkbox-container">
                        <label
                          className="profile__checkbox-label"
                          htmlFor="password-checkbox"
                        >
                          <input
                            name="password-checkbox"
                            type="checkbox"
                            id="password-checkbox"
                            className="profile__checkbox-input"
                            onChange={handleCheckboxChange}
                          />
                          <span className="profile__checkbox-text">
                            Сменить пароль
                          </span>
                        </label>
                      </div>
                    </label>
                    {isEditPassword && (
                      <form
                        className="profile__change-password-form"
                        name="change-password"
                        onSubmit={handleChangePasswordSubmit}
                        noValidate
                      >
                        <label
                          htmlFor="previousPassword"
                          className="profile__input-label"
                        >
                          Введите старый пароль
                          <input
                            name="previousPassword"
                            type="text"
                            id="previousPassword"
                            className="profile__input"
                            value={passwordValues.previousPassword}
                            onChange={handlePreviousPasswordChange}
                            required
                          />
                          {passwordErrors && (
                            <span className="profile__password-error">
                              {passwordErrors.previousPassword}
                            </span>
                          )}
                        </label>
                        <label
                          htmlFor="newPassword"
                          className="profile__input-label"
                        >
                          Введите новый пароль
                          <input
                            name="newPassword"
                            type="text"
                            id="newPassword"
                            className="profile__input"
                            value={passwordValues.newPassword}
                            onChange={handlePasswordChange}
                            required
                          />
                          {passwordErrors && (
                            <span className="profile__password-error">
                              {passwordErrors.newPassword}
                            </span>
                          )}
                        </label>
                        <label
                          htmlFor="passwordConfirmation"
                          className="profile__input-label"
                        >
                          Подтвердите пароль
                          <input
                            name="passwordConfirmation"
                            type="text"
                            id="passwordConfirmation"
                            className="profile__input"
                            value={passwordValues.passwordConfirmation}
                            required
                            onChange={handlePasswordConfirmationChange}
                          />
                          {passwordErrors && (
                            <span className="profile__password-error">
                              {passwordErrors.passwordConfirmation}
                            </span>
                          )}
                        </label>

                        <button
                          className="profile__save-button link"
                          type="submit"
                          disabled={!isValid}
                        >
                          Сохранить изменения
                        </button>
                      </form>
                    )}
                  </div>
                </>
              )}
              {isContacts && (
                <div className="profile__contacts-form">
                  <label htmlFor="email" className="profile__input-label">
                    Почта
                    <input
                      name="email"
                      type="text"
                      id="email"
                      className="profile__input"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors && (
                      <span className="form-input__input-error">
                        {errors.email}
                      </span>
                    )}
                  </label>
                  <div className="profile__double-input-container">
                    <label htmlFor="phone" className="profile__input-label">
                      Телефон
                      <input
                        name="phone"
                        type="text"
                        id="phone"
                        className="profile__input"
                        value={values.phone}
                        onChange={handleChange}
                        mask="phone"
                      />
                      {errors && (
                        <span className="form-input__input-error">
                          {errors.phone}
                        </span>
                      )}
                    </label>
                    <label htmlFor="telegram" className="profile__input-label">
                      Telegram
                      <input
                        name="telegram"
                        type="text"
                        id="telegram"
                        className="profile__input"
                        value={values.telegram}
                        onChange={handleChange}
                        mask="tgLink"
                      />
                      {errors && (
                        <span className="form-input__input-error">
                          {errors.telegram}
                        </span>
                      )}
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="profile__saved-resumes">
            <h2 className="profile__saved-resumes-title">Сохраненные резюме</h2>
            <div className="profile__cvs-container">
              {cvArray.map(cv => (
                <Cv cv={cv} deletePopupSetState={deletePopupSetState} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

Profile.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  deletePopupSetState: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  values: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.objectOf(
            PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          ),
        ])
      ),
    ])
  ),
}

Profile.defaultProps = {
  values: {},
}

export default Profile
