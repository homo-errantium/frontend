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

  const openProfileData = () => {
    setIsContacts(false)
    setIsProfileData(true)
  }
  const openContacts = () => {
    setIsProfileData(false)
    setIsContacts(true)
  }

  const cvArray = [
    { id: 1, image: cvExampleOne, name: 'Резюме 1' },
    { id: 2, image: cvExampleTwo, name: 'Резюме 2' },
  ]

  const [isEditPassword, setIsEditPassword] = useState(false)
  const handleCheckboxChange = () => {
    setIsEditPassword(!isEditPassword)
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
                        value="1234"
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
                      <>
                        <label
                          htmlFor="previous-password"
                          className="profile__input-label"
                        >
                          Введите старый пароль
                          <input
                            name="previous-password"
                            type="text"
                            id="previous-password"
                            className="profile__input"
                          />
                        </label>
                        <label
                          htmlFor="new-password"
                          className="profile__input-label"
                        >
                          Введите новый пароль
                          <input
                            name="new-password"
                            type="text"
                            id="new-password"
                            className="profile__input"
                          />
                        </label>
                        <label
                          htmlFor="confirm-password"
                          className="profile__input-label"
                        >
                          Подтвердите пароль
                          <input
                            name="confirm-password"
                            type="text"
                            id="confirm-password"
                            className="profile__input"
                          />
                        </label>

                        <button
                          className="profile__save-button link"
                          type="button"
                        >
                          Сохранить изменения
                        </button>
                      </>
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
