import React from 'react'
import PropTypes from 'prop-types'
import './Resume.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Resume({ isLoggedIn }) {
	const nextPage = '/profession'
	return (
		<>
			<Header isLoggedIn={isLoggedIn} nextPage={nextPage} />
			<main className="resume">Resume</main>
			<Footer />
		</>
	)
}
Resume.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired,
}

export default Resume
