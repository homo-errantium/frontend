/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import './Profile.scss'
import IMask from 'imask'
import classNames from 'classnames'
import Header from '../Header/Header'
import ImageUpload from './ImageUpload/ImageUpload'
import Cv from './Cv/Cv'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import PopupCopyLink from '../Popups/PopupCopyLink/PopupCopyLink'
import {
  validationName,
  validationSurname,
  validationBirthday,
  validationCity,
  validationPassword,
} from '../../constants/validation'

function Profile({
  isEditMod,
  setCurrentResume,
  currentResume,
  isLoggedIn,
  deletePopupSetState,
  setCurrentUser,
  imageProfile,
  setImageProfile,
  arrValues,
  setArrValues,
  setIsEditMod,
  values,
  setValues,
  setIsResumeNamePopupOpen,
  setImage,
  setHasQualification,
  setHasExperience,
  setAllTillPresent,
}) {
  const nextPage = '/*'
  const [isProfileData, setIsProfileData] = useState(true)
  const [isContacts, setIsContacts] = useState(false)
  const [popupCopyLink, setPopupCopyLink] = useState(false)
  const currentUser = useContext(CurrentUserContext)
  const [errors, setErrors] = useState({
    name: '',
    city: '',
    email: '',
    imageProfile: '',
    surname: '',
    phone: '',
    telegram: '',
    newPassword: '',
    passwordConfirmation: '',
    previousPassword: '',
  })
  const [isValidFields, setIsValidFields] = useState({
    name: false,
    city: false,
    email: false,
    imageProfile: false,
    surname: false,
    phone: false,
    telegram: false,
  })
  const [arrIsValidFields, setArrIsValidFields] = useState([])

  // ОТКРЫТИЕ ДОПОЛНИТЕЛЬНЫХ ПОЛЕЙ ДЛЯ СМЕНЫ ПАРОЛЯ
  const [isEditPassword, setIsEditPassword] = useState(false)
  const handleCheckboxChange = () => {
    setIsEditPassword(!isEditPassword)
  }

  // ЛОГИКА СМЕНЫ ПАРОЛЯ
  const [isValidPasswords, setIsValidPasswords] = useState({
    newPassword: false,
    passwordConfirmation: false,
    previousPassword: false,
  })
  const [isValid, setIsValid] = useState(false)

  // Захардкоженный пароль
  // TODO: внести его в объект currentUser
  const currentPassword = 'qwerty'

  useEffect(() => {
    setArrIsValidFields(() =>
      Object.keys(isValidFields).map(key => isValidFields[key])
    )
    if (!isEditPassword && arrIsValidFields.includes(true)) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }, [isValidFields])

  // Функция, которая собирает и валидирует поля с основными данными пользователя
  function handleChangeUserData(evt) {
    const { name, value } = evt.target
    if (name === 'name') {
      validationName(value, isValidFields, setIsValidFields, setErrors, errors)
    }

    if (name === 'surname') {
      validationSurname(
        value,
        isValidFields,
        setIsValidFields,
        setErrors,
        errors
      )
    }

    if (name === 'birthday') {
      validationBirthday(
        value,
        isValidFields,
        setIsValidFields,
        setErrors,
        errors
      )
    }

    if (name === 'city') {
      validationCity(value, isValidFields, setIsValidFields, setErrors, errors)
    }
    setCurrentUser({ ...currentUser, [name]: value })
  }

  // Функция, которая собирает и валидирует поля с подтверждением пароля
  const handleChangePassword = evt => {
    const { name, value } = evt.target
    validationPassword(
      name,
      value,
      setErrors,
      errors,
      currentUser,
      setIsValidPasswords,
      isValidPasswords,
      currentPassword
    )
    setCurrentUser({ ...currentUser, [name]: value })
  }

  // useEffect подтягивает изменённую фотку пользователя в реальном времени
  useEffect(() => {
    setCurrentUser(prevUser => ({
      ...prevUser,
      imageProfile,
    }))
  }, [imageProfile])

  const handleClickUserData = () => {
    setCurrentUser(prevUser => ({
      ...prevUser,
      imageProfile,
    }))
    localStorage.setItem('user', JSON.stringify(currentUser))
    localStorage.setItem('imageProfile', imageProfile)
    setArrIsValidFields([])
  }

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

  // const handleChangePasswordSubmit = e => {
  //   e.preventDefault()
  //   if (currentUser.newPassword !== currentUser.passwordConfirmation) {
  //     setIsValidPassword(false)
  //     setPasswordErrors({
  //       ...passwordErrors,
  //       passwordConfirmation: 'Пароли не совпадают',
  //     })
  //   } else if (currentUser.previousPassword !== currentPassword) {
  //     setIsValidPassword(false)
  //     setPasswordErrors({
  //       ...passwordErrors,
  //       passwordConfirmation: 'Старый пароль указан неверно',
  //     })
  //   } else {
  //     setPasswordErrors({
  //       ...passwordErrors,
  //       passwordConfirmation: '',
  //     })
  //   }
  // }

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        nextPage={nextPage}
        setIsEditMod={setIsEditMod}
        setValues={setValues}
        setImage={setImage}
        setHasExperience={setHasExperience}
        setHasQualification={setHasQualification}
        setAllTillPresent={setAllTillPresent}
      />
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
                    <ImageUpload
                      image={imageProfile}
                      currentImage={currentUser.imageProfile}
                      setImage={setImageProfile}
                      name="image_profile"
                    />
                  </div>
                  <div className="profile__personal-data-form">
                    <label htmlFor="name" className="profile__input-label">
                      Имя
                      <input
                        name="name"
                        type="text"
                        id="name"
                        value={currentUser.name || ''}
                        className="profile__input"
                        onChange={handleChangeUserData}
                        onBlur={() => {
                          setErrors({ ...errors, name: '' })
                        }}
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
                        value={currentUser.surname || ''}
                        onChange={handleChangeUserData}
                        onBlur={() => {
                          setErrors({ ...errors, surname: '' })
                        }}
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
                          value={currentUser.birthday || ''}
                          onBlur={() => {
                            setErrors({ ...errors, birthday: '' })
                          }}
                          onChange={handleChangeUserData}
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
                          value={currentUser.city || ''}
                          onChange={handleChangeUserData}
                          onBlur={() => {
                            setErrors({ ...errors, city: '' })
                          }}
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
                        value={currentPassword || ''}
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
                        // onSubmit={handleChangePasswordSubmit}
                        noValidate
                      >
                        <label
                          htmlFor="previousPassword"
                          className="profile__input-label"
                        >
                          Введите старый пароль
                          <input
                            name="previousPassword"
                            type="password"
                            id="previousPassword"
                            className="profile__input"
                            value={currentUser.previousPassword || ''}
                            onChange={handleChangePassword}
                            required
                          />
                          <span className="profile__password-error">
                            {errors.previousPassword}
                          </span>
                        </label>
                        <label
                          htmlFor="newPassword"
                          className="profile__input-label"
                        >
                          Введите новый пароль
                          <input
                            name="newPassword"
                            type="password"
                            id="newPassword"
                            className="profile__input"
                            value={currentUser.newPassword || ''}
                            onChange={handleChangePassword}
                            required
                          />
                          <span className="profile__password-error">
                            {errors.newPassword}
                          </span>
                        </label>
                        <label
                          htmlFor="passwordConfirmation"
                          className="profile__input-label"
                        >
                          Подтвердите пароль
                          <input
                            name="passwordConfirmation"
                            type="password"
                            id="passwordConfirmation"
                            className="profile__input"
                            value={currentUser.passwordConfirmation || ''}
                            required
                            onChange={handleChangePassword}
                          />
                          <span className="profile__password-error">
                            {errors.passwordConfirmation}
                          </span>
                        </label>
                      </form>
                    )}
                    <button
                      className="profile__save-button link"
                      type="button"
                      disabled={!isValid}
                      onClick={handleClickUserData}
                    >
                      Сохранить изменения
                    </button>
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
                      value={currentUser.email || ''}
                      onChange={handleChangeUserData}
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
                        value={currentUser.phone || ''}
                        onChange={handleChangeUserData}
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
                        value={currentUser.telegram || ''}
                        onChange={handleChangeUserData}
                        mask="tgLink"
                      />
                      {errors && (
                        <span className="form-input__input-error">
                          {errors.telegram}
                        </span>
                      )}
                    </label>
                  </div>
                  <button
                    className="profile__save-button link"
                    type="button"
                    onClick={handleClickUserData}
                  >
                    Сохранить изменения
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="profile__saved-resumes">
            <h2 className="profile__saved-resumes-title">Сохраненные резюме</h2>
            <div className="profile__cvs-container">
              {arrValues.map(cv => (
                <Cv
                  isEditMod={isEditMod}
                  setCurrentResume={setCurrentResume}
                  currentResume={currentResume}
                  arrValues={arrValues}
                  setArrValues={setArrValues}
                  key={cv.id}
                  cv={cv}
                  deletePopupSetState={deletePopupSetState}
                  setIsEditMod={setIsEditMod}
                  values={values}
                  setValues={setValues}
                  setIsResumeNamePopupOpen={setIsResumeNamePopupOpen}
                  setPopupCopyLink={setPopupCopyLink}
                />
              ))}
            </div>
          </div>
        </div>
        <PopupCopyLink popupCopyLink={popupCopyLink} />
      </main>
    </>
  )
}

Profile.propTypes = {
  isEditMod: PropTypes.bool.isRequired,
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
  ).isRequired,
  setValues: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  deletePopupSetState: PropTypes.func.isRequired,
  // errors: PropTypes.objectOf(
  //   PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  // ).isRequired,
  setCurrentUser: PropTypes.func.isRequired,
  imageProfile: PropTypes.string,
  setImageProfile: PropTypes.func.isRequired,
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
  ).isRequired,
  setArrValues: PropTypes.func.isRequired,
  setCurrentResume: PropTypes.func.isRequired,
  currentResume: PropTypes.objectOf(
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
  ).isRequired,
  setIsEditMod: PropTypes.func,
  setIsResumeNamePopupOpen: PropTypes.func.isRequired,
  setImage: PropTypes.func,
  setHasExperience: PropTypes.func.isRequired,
  setHasQualification: PropTypes.func.isRequired,
  setAllTillPresent: PropTypes.func.isRequired,
}

Profile.defaultProps = {
  imageProfile: '',
  setIsEditMod: () => {},
  setImage: () => {},
}

export default Profile
