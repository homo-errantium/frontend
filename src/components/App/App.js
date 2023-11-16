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
import About from '../Resume/About/About'
import Education from '../Resume/Education/Education'
import Expirience from '../Resume/Experience/Experience'
import Layouts from '../Resume/Layouts/Layouts'
import PersonalData from '../Resume/PersonalData/PersonalData'
import Portfolio from '../Resume/Portfolio/Portfolio'
import Qualification from '../Resume/Qualification/Qualification'
import Result from '../Resume/Result/Result'
import Skills from '../Resume/Skills/Skills'

function App() {
	// eslint-disable-next-line no-unused-vars
	const [isLoggedIn, setIsLoggedIn] = React.useState(false) // Пользователь авторизован/неавторизован
	// eslint-disable-next-line no-unused-vars
	const [currentUser, setCurrentUser] = React.useState({}) // Сохраняем данные пользователя

	// Переменные для защиты дочерних роутов компонента Resume
	// TODO: установить значение false для всех переменных ниже после сохранения резюме
	const [complitedStepsPersonalData, setComplitedStepsPersonalData] =
		React.useState(false)
	const [complitedStepsExperience, setComplitedStepsExperience] =
		React.useState(false)
	const [complitedStepsQualification, setComplitedStepsQualification] =
		React.useState(false)
	const [complitedStepsEducation, setComplitedStepsEducation] =
		React.useState(false)
	const [complitedStepsPortfolio, setComplitedStepsPortfolio] =
		React.useState(false)
	const [complitedStepsSkills, setComplitedStepsSkills] =
		React.useState(false)
	const [complitedStepsAbout, setComplitedStepsAbout] = React.useState(false)
	const [complitedLayouts, setComplitedLayouts] = React.useState(false)

	// Объект для защиты дочерних роутов Resume
	const routesResumeArr = [
		{
			path: 'personal-data',
			element: (
				<PersonalData
					setComplitedSteps={setComplitedStepsPersonalData}
				/>
			),
			id: 1,
			complitedSteps: complitedStepsPersonalData,
		},
		{
			path: 'experience',
			element: (
				<Expirience setComplitedSteps={setComplitedStepsExperience} />
			),
			id: 2,
			complitedSteps: complitedStepsExperience,
		},
		{
			path: 'qualification',
			element: (
				<Qualification
					setComplitedSteps={setComplitedStepsQualification}
				/>
			),
			id: 3,
			complitedSteps: complitedStepsQualification,
		},
		{
			path: 'education',
			element: (
				<Education setComplitedSteps={setComplitedStepsEducation} />
			),
			id: 4,
			complitedSteps: complitedStepsEducation,
		},
		{
			path: 'portfolio',
			element: (
				<Portfolio setComplitedSteps={setComplitedStepsPortfolio} />
			),
			id: 5,
			complitedSteps: complitedStepsPortfolio,
		},
		{
			path: 'skills',
			element: <Skills setComplitedSteps={setComplitedStepsSkills} />,
			id: 6,
			complitedSteps: complitedStepsSkills,
		},
		{
			path: 'about',
			element: <About setComplitedSteps={setComplitedStepsAbout} />,
			id: 7,
			complitedSteps: complitedStepsAbout,
		},
		{
			path: 'layouts',
			element: <Layouts setComplitedSteps={setComplitedLayouts} />,
			id: 8,
			complitedSteps: complitedLayouts,
		},
		{
			path: 'result',
			element: <Result />,
			id: 9,
			complitedSteps: complitedStepsPersonalData,
			setComplitedSteps: null,
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
								<Register onRegister={handleRegister} />
							)
						}
					/>
					<Route
						path="/signin"
						element={
							isLoggedIn ? (
								<Navigate to="/" replace />
							) : (
								<Login onLogin={handleLogin} />
							)
						}
					/>
					<Route
						path="/my-profile"
						element={
							<ProtectedRoute
								element={Profile}
								isLoggedIn={isLoggedIn}
							/>
						}
					/>
					<Route
						path="/"
						element={<Main isLoggedIn={isLoggedIn} />}
					/>
					<Route
						path="/profession"
						element={<Profession isLoggedIn={isLoggedIn} />}
					/>
					<Route
						path="/resume"
						element={<Resume isLoggedIn={isLoggedIn} />}
					>
						<Route
							index
							element={<Navigate to="personal-data" />}
						/>
						{routesResumeArr.map((route, i) => (
							<Route
								path={route.path}
								element={
									i === 0 ||
									routesResumeArr[i - 1].complitedSteps ? (
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
			</CurrentUserContext.Provider>
		</div>
	)
}

export default App
