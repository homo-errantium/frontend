/* eslint-disable array-callback-return */
import React from 'react'
import './App.scss'
import { Routes, Route, Navigate } from 'react-router-dom'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import Main from '../Main/Main'
import Profession from '../Profession/Profession'
import Resume from '../Resume/Resume'
import NotFound from '../NotFound/NotFound'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
// import About from '../Resume/About/About'
// import Education from '../Resume/Education/Education'
import Experience from '../Resume/Experience/Experience'
// import Layouts from '../Resume/Layouts/Layouts'
import PersonalData from '../Resume/PersonalData/PersonalData'
// import Portfolio from '../Resume/Portfolio/Portfolio'
// import Qualification from '../Resume/Qualification/Qualification'
import Result from '../Resume/Result/Result'
// import Skills from '../Resume/Skills/Skills'

import PopupRegister from '../PopupRegister/PopupRegister'
import PopupConfirmation from '../PopupConfirmation/PopupConfirmation'
import PopupResumeName from '../PopupResumeName/PopupResumeName'
import PopupLogin from '../PopupLogin/PopupLogin'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = React.useState(false) // Пользователь авторизован/неавторизован
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = React.useState({}) // Сохраняем данные пользователя

  // Переменные для защиты дочерних роутов компонента Resume
  // TODO: установить значение false для всех переменных ниже после сохранения резюме
  const [completedStepsPersonalData, setCompletedStepsPersonalData] =
    React.useState(false)
  const [completedStepsExperience, setCompletedStepsExperience] =
    React.useState(false)
  // const [completedStepsQualification, setCompletedStepsQualification] =
  //   React.useState(false)
  // const [completedStepsEducation, setCompletedStepsEducation] =
  //   React.useState(false)
  // const [completedStepsPortfolio, setCompletedStepsPortfolio] =
  //   React.useState(false)
  // const [completedStepsSkills, setCompletedStepsSkills] = React.useState(false)
  // const [completedStepsAbout, setCompletedStepsAbout] = React.useState(false)
  // const [completedLayouts, setCompletedLayouts] = React.useState(false)

  // --------------------------- Работа с данными через локальное хранилище -----------------------

  // Записываем в объект данные из полей
  const [values, setValues] = React.useState({})
  // Достаём данные полей из хранилища
  const [localFormData, setLocalFormData] = React.useState(
    JSON.parse(localStorage.getItem('formData')) || {}
  )
  // Записываем в объект данные чекбоксов
  const [checkboxValues, setCheckboxValues] = React.useState({})
  // Достаём данные чекбоксов из хранилища
  const [localCheckboxData, setLocalCheckboxData] = React.useState(
    JSON.parse(localStorage.getItem('checkboxData')) || checkboxValues
  )
  // Если опыт есть, поля активны. Если нет, поля деактивируются:
  const [hasExperience, setHasExperience] = React.useState(
    JSON.parse(localStorage.getItem('hasExperience') || true)
  )
  console.log(hasExperience)
  // Блокирует/ разблокирует поля ввода периода работы
  const [isTillPresent, setIsTillPresent] = React.useState(
    JSON.parse(localStorage.getItem('isTillPresent')) || false
  )
  const [chosenMonth, setChosenMonth] = React.useState(
    JSON.parse(localStorage.getItem('chosenMonth')) || {}
  )
  const [localChooseMonth, setLocalChooseMonth] = React.useState(
    JSON.parse(localStorage.getItem('chosenMonth')) || chosenMonth
  )
  // console.log(localChooseMonth)

  React.useEffect(() => {
    setValues(prevValues => ({
      ...prevValues,
      company: localFormData.company || '',
      company_website: localFormData.company_website || '',
      current_position: localFormData.current_position || '',
      duties: localFormData.duties || '',
      company1: localFormData.company1 || '',
      company_website1: localFormData.company_website1 || '',
      current_position1: localFormData.current_position1 || '',
      duties1: localFormData.duties1 || '',
      company2: localFormData.company2 || '',
      company_website2: localFormData.company_website2 || '',
      current_position2: localFormData.current_position2 || '',
      duties2: localFormData.duties2 || '',
      company3: localFormData.company3 || '',
      company_website3: localFormData.company_website3 || '',
      current_position3: localFormData.current_position3 || '',
      duties3: localFormData.duties3 || '',
      company4: localFormData.company4 || '',
      company_website4: localFormData.company_website4 || '',
      current_position4: localFormData.current_position4 || '',
      duties4: localFormData.duties4 || '',
      company5: localFormData.company5 || '',
      company_website5: localFormData.company_website5 || '',
      current_position5: localFormData.current_position5 || '',
      duties5: localFormData.duties5 || '',
    }))

    setCheckboxValues(prevValues => ({
      ...prevValues,
      work_experience: localCheckboxData.work_experience,
      work_period: localCheckboxData.work_period,
      work_period1: localCheckboxData.work_period1,
      work_period2: localCheckboxData.work_period2,
      work_period3: localCheckboxData.work_period3,
      work_period4: localCheckboxData.work_period4,
      work_period5: localCheckboxData.work_period5,
    }))

    // setChosenMonth(prevValues => ({
    //   ...prevValues,
    //   month_start: localChooseMonth.month_start || 1,
    //   // month_start1: localChooseMonth.month_start1,
    //   // month_start2: localChooseMonth.month_start2,
    //   // month_start3: localChooseMonth.month_start3,
    //   // month_start4: localChooseMonth.month_start4,
    //   // month_start5: localChooseMonth.month_start5,
    //   month_end: localChooseMonth.month_end || 1,
    //   // month_end1: localChooseMonth.month_end1,
    //   // month_end2: localChooseMonth.month_end2,
    //   // month_end3: localChooseMonth.month_end3,
    //   // month_end4: localChooseMonth.month_end4,
    //   // month_end5: localChooseMonth.month_end5,
    // }))
  }, [localFormData, localCheckboxData])

  const handleCheckboxChange = evt => {
    const { name } = evt.target
    setCheckboxValues(prevValues => ({
      ...prevValues,
      [name]: !prevValues[name],
    }))
  }

  // Функция, которая записывает данные полей форм
  const handleChange = evt => {
    const { name, value } = evt.target

    setValues({ ...values, [name]: value })
  }

  // Сохраняем данные полей в локалное хранилище
  const handleClick = () => {
    const checkboxData = { ...localCheckboxData, ...checkboxValues }
    const formData = { ...localFormData, ...values }
    const chosenData = { ...localChooseMonth, ...chosenMonth }
    localStorage.setItem('checkboxData', JSON.stringify(checkboxData))
    localStorage.setItem('formData', JSON.stringify(formData))
    localStorage.setItem('hasExperience', JSON.stringify(hasExperience))
    localStorage.setItem('isTillPresent', JSON.stringify(isTillPresent))
    localStorage.setItem('chosenMonth', JSON.stringify(chosenData))
    setLocalCheckboxData(checkboxData)
    setLocalFormData(formData)
    setLocalChooseMonth(chosenData)
  }

  /* ----------------------------------------- Popup -----------------------------------------------------*/
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false)
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false)
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false)
  const [isResumeNamePopupOpen, setIsResumeNamePopupOpen] =
    React.useState(false)

  // закрытие попапа
  const closeAllPopup = () => {
    setIsLoginPopupOpen(false)
    setIsRegisterPopupOpen(false)
    setIsConfirmPopupOpen(false)
    setIsResumeNamePopupOpen(false)
  }

  // открытие попапа
  // eslint-disable-next-line no-unused-vars
  const handleResumeNamePopupOpen = () => {
    setIsResumeNamePopupOpen(true)
  }
  // eslint-disable-next-line no-unused-vars
  const handleLoginPopupOpen = () => {
    setIsLoginPopupOpen(true)
  }
  // eslint-disable-next-line no-unused-vars
  const handleRegisterPopupOpen = () => {
    setIsRegisterPopupOpen(true)
  }
  const handleConfirmPopupOpen = () => {
    setIsConfirmPopupOpen(true)
  }

  // /* убрать эти консоли */
  // // eslint-disable-next-line no-console
  // console.log(handleLoginPopupOpen)
  // // eslint-disable-next-line no-console
  // console.log(handleRegisterPopupOpen)
  // // eslint-disable-next-line no-console
  // console.log(handleResumeNamePopupOpen)
  // // eslint-disable-next-line no-console
  // console.log(handleConfirmPopupOpen)
  // /* --------- для Popup ---------*/

  // Объект для защиты дочерних роутов Resume
  const routesResumeArr = [
    {
      path: 'personal-data',
      element: <PersonalData />,
      id: 1,
      completedSteps: completedStepsPersonalData,
    },
    {
      path: 'experience',
      element: (
        <Experience
          values={values}
          handleChange={handleChange}
          handleCheckboxChange={handleCheckboxChange}
          checkboxValues={checkboxValues}
          hasExperience={hasExperience}
          setHasExperience={setHasExperience}
          isTillPresent={isTillPresent}
          setIsTillPresent={setIsTillPresent}
          chosenMonth={chosenMonth}
          setChosenMonth={setChosenMonth}
        />
      ),
      id: 2,
      completedSteps: completedStepsExperience,
    },
    // {
    //   path: 'qualification',
    //   element: <Qualification />,
    //   id: 3,
    //   completedSteps: completedStepsQualification,
    // },
    // {
    //   path: 'education',
    //   element: <Education />,
    //   id: 4,
    //   completedSteps: completedStepsEducation,
    // },
    // {
    //   path: 'portfolio',
    //   element: <Portfolio />,
    //   id: 5,
    //   completedSteps: completedStepsPortfolio,
    // },
    // {
    //   path: 'skills',
    //   element: <Skills />,
    //   id: 6,
    //   completedSteps: completedStepsSkills,
    // },
    // {
    //   path: 'about',
    //   element: <About />,
    //   id: 7,
    //   completedSteps: completedStepsAbout,
    // },
    // {
    //   path: 'layouts',
    //   element: <Layouts />,
    //   id: 8,
    //   completedSteps: completedLayouts,
    // },
    {
      path: 'result',
      element: <Result />,
      id: 9,
      completedSteps: completedStepsPersonalData,
    },
  ]

  // TODO: добавить описание функции регистрации по готовности Api
  // eslint-disable-next-line no-unused-vars
  const handleRegister = (name, email, password) => {
    // eslint-disable-next-line no-console
    console.log('try register')
  }

  // TODO: добавить описание функции авторизации по готовности Api
  // eslint-disable-next-line no-unused-vars
  const handleLogin = (email, password) => {
    // eslint-disable-next-line no-console
    console.log('try to login')
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/signup"
            element={
              isLoggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <Register
                  onRegister={handleRegister}
                  isOpen={isRegisterPopupOpen}
                />
              )
            }
          />
          <Route
            path="/signin"
            element={
              isLoggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <Login
                  onLogin={handleLogin}
                  isOpen={isLoginPopupOpen}
                  isLoggedIn={isLoggedIn}
                />
              )
            }
          />
          <Route
            path="/my-profile"
            element={
              <ProtectedRoute element={Profile} isLoggedIn={isLoggedIn} />
            }
          />
          <Route
            path="/"
            element={
              <Main
                isLoggedIn={isLoggedIn}
                onOpenPopup={handleConfirmPopupOpen}
              />
            }
          />
          <Route
            path="/profession"
            element={
              <Profession
                isLoggedIn={isLoggedIn}
                onOpenPopup={handleConfirmPopupOpen}
              />
            }
          />
          <Route
            path="/resume"
            element={
              <Resume
                isLoggedIn={isLoggedIn}
                onOpenPopup={handleConfirmPopupOpen}
                setCompletedStepsPersonalData={setCompletedStepsPersonalData}
                setCompletedStepsExperience={setCompletedStepsExperience}
                // setCompletedStepsQualification={setCompletedStepsQualification}
                // setCompletedStepsEducation={setCompletedStepsEducation}
                // setCompletedStepsPortfolio={setCompletedStepsPortfolio}
                // setCompletedStepsSkills={setCompletedStepsSkills}
                // setCompletedStepsAbout={setCompletedStepsAbout}
                // setCompletedLayouts={setCompletedLayouts}
                onClick={handleClick}
              />
            }
          >
            <Route index element={<Navigate to="personal-data" />} />
            {routesResumeArr.map((route, i) => (
              <Route
                path={route.path}
                element={
                  i === 0 || routesResumeArr[i - 1].completedSteps ? (
                    route.element
                  ) : (
                    <Navigate to="/resume" replace />
                  )
                }
                key={route.id}
              />
            ))}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Попап регистрации */}
        <PopupRegister
          isOpen={isRegisterPopupOpen}
          onClose={closeAllPopup}
          onRegister={handleRegister}
        />
        {/* Попап авторизации */}
        <PopupLogin
          isOpen={isLoginPopupOpen}
          onClose={closeAllPopup}
          onLogin={handleLogin}
        />
        {/* Попап подтверждения */}
        <PopupConfirmation
          isOpen={isConfirmPopupOpen}
          onClose={closeAllPopup}
        />
        {/* попап добавления имени резюме */}
        <PopupResumeName
          isOpen={isResumeNamePopupOpen}
          onClose={closeAllPopup}
        />
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App
