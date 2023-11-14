import React from 'react'
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

export default Resume
