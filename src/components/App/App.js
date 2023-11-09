import React from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import Main from '../Main/Main'
import Professional from '../Professional/Professional'
import Resume from '../Resume/Resume'
import Error from '../Error/Error'
import Register from '../Register/Register'
import Login from '../Login/Login'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

function App() {
	// eslint-disable-next-line no-unused-vars
	const [isLoggedIn, setIsLoggedIn] = React.useState(true) // Пользователь авторизован/неавторизован
	// eslint-disable-next-line no-unused-vars
	const [currentUser, setCurrentUser] = React.useState({}) // Сохраняем данные пользователя

	return (
		<div className="app">
			<CurrentUserContext.Provider value={currentUser}>
				<Routes>
					<Route
						path="/reg"
						element={
							<ProtectedRoute
								element={Register}
								isLoggedIn={!isLoggedIn}
							/>
						}
					/>
					<Route
						path="/auth"
						element={
							<ProtectedRoute
								element={Login}
								isLoggedIn={!isLoggedIn}
							/>
						}
					/>
					<Route path="/" element={<Main />} />
					<Route path="/professional" element={<Professional />} />
					<Route path="/resume" element={<Resume />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</CurrentUserContext.Provider>
		</div>
	)
}

export default App
