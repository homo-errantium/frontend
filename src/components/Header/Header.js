import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate, useLocation, NavLink } from 'react-router-dom'
import './Header.scss'
import headerIcon from '../../logo.svg'

function Header({ isLoggedIn, nextPage, onOpenPopup, setCompletedSteps }) {
  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname

  const isLogRegPage = () => !!(path === '/signin' || path === '/signup')

  const isMainPage = () => !!(path === '/')

  const isPersonDataPage = () => !!(path === '/resume/personal-data')

  const isResultPage = () => !!(path === '/resume/result')

  const isNotFoundPage = () =>
    !!(
      path !== '/' &&
      path !== '/my-profile' &&
      path !== '/signin' &&
      path !== '/signup' &&
      path !== '/resume/personal-data' &&
      path !== '/resume/qualification' &&
      path !== '/resume/experience' &&
      path !== '/resume/education' &&
      path !== '/resume/portfolio' &&
      path !== '/resume/skills' &&
      path !== '/resume/about' &&
      path !== '/resume/layouts' &&
      path !== '/profession'
    )

  // на странице готового  резюме
  if (isResultPage()) {
    return (
      <header className="header ">
        <button
          className="header__button"
          type="button"
          label="button"
          onClick={onOpenPopup}
        >
          Личный кабинет
        </button>
        <div className="header__buttons-container">
          <button
            className="header__button header__button_prev"
            type="button"
            label="button"
            onClick={() => {}}
          >
            Редактировать
          </button>
          <button
            className="header__button header__button_prev"
            type="button"
            label="button"
            onClick={() => {}}
          >
            Word
          </button>
          <button
            className="header__button header__button_prev"
            type="button"
            label="button"
            onClick={() => {}}
          >
            PDF
          </button>
          <button
            className="header__button header__button_next"
            type="button"
            label="button"
            onClick={() => {}}
          >
            Сохранить
          </button>
        </div>
      </header>
    )
  }

  if (isNotFoundPage()) {
    return (
      <header className="header ">
        <button
          className="header__button"
          type="button"
          label="button"
          onClick={() => navigate('/')}
        >
          Главная страница
        </button>
      </header>
    )
  }

  // старт страница + залогинены
  if ((isMainPage() || isLogRegPage()) && isLoggedIn) {
    return (
      <header className="header">
        <NavLink className="header__link" to="/">
          <img src={headerIcon} alt="header logo" className="header__logo" />
        </NavLink>
        <div className="header__buttons-container">
          <button
            className="header__button"
            type="button"
            label="button"
            onClick={() => navigate('/resume')}
          >
            Создать резюме
          </button>
          <button
            className="header__button"
            type="button"
            label="button"
            onClick={() => navigate('/my-profile')}
          >
            Личный кабинет
          </button>
          <button
            className="header__button"
            type="button"
            label="button"
            onClick={() => navigate('/')}
          >
            Выйти
          </button>
        </div>
      </header>
    )
  }
  // страница авт или рег + НЕ залогинены
  if ((isMainPage() || isLogRegPage()) && !isLoggedIn) {
    return (
      <header className="header">
        <NavLink className="header__link" to="/">
          <img src={headerIcon} alt="header logo" className="header__logo" />
        </NavLink>
        <div className="header__buttons-container">
          <button
            className="header__button header__button_login"
            type="button"
            label="button"
            onClick={() => navigate('/resume')}
          >
            Создать резюме
          </button>
          <button
            className="header__button header__button_register"
            type="button"
            label="button"
            onClick={() => navigate('/signin')}
          >
            Войти
          </button>
        </div>
      </header>
    )
  }
  // НЕ старт страница
  if (!(isMainPage() && isLogRegPage())) {
    return (
      <header className="header ">
        <button
          className="header__button"
          type="button"
          label="button"
          onClick={onOpenPopup}
        >
          Личный кабинет
        </button>
        <div className="header__buttons-container">
          {!isPersonDataPage() && (
            <button
              className="header__button header__button_prev"
              type="button"
              label="button"
              onClick={() => navigate(-1)}
            >
              Предыдущий шаг
            </button>
          )}
          <button
            className="header__button header__button_next"
            type="button"
            label="button"
            onClick={() => {
              setCompletedSteps()
              navigate(`${nextPage}`)
            }}
          >
            Следующий шаг
          </button>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
  nextPage: PropTypes.string,
  onOpenPopup: PropTypes.func,
  setCompletedSteps: PropTypes.func,
}
Header.defaultProps = {
  isLoggedIn: false,
  nextPage: '',
  onOpenPopup: () => {},
  setCompletedSteps: () => {},
}

export default Header
