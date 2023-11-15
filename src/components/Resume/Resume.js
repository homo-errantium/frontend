import React from 'react'
import PropTypes from 'prop-types'
import './Resume.scss'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { locationArr } from '../../constants/constants'

function Resume({ isLoggedIn }) {
	const location = useLocation()
	const [nextPage, setNextPage] = React.useState(locationArr[0]) // Переменная с фактической локацией

	React.useEffect(() => {
		// Находим индекс элемента в массиве с локациями
		const currentIndex = locationArr.indexOf(
			location.pathname.replace('/resume/', '')
		)
		if (currentIndex !== -1 && currentIndex < locationArr.length - 1) {
			// При нажатии на кнопку пробрасываем поользователя на локацию вперёд
			setNextPage(locationArr[currentIndex + 1])
		}
	}, [location])

	return (
		<>
			<Header isLoggedIn={isLoggedIn} nextPage={nextPage} />
			<main className="resume">
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
Resume.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired,
}

export default Resume
