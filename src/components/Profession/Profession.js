import React from 'react'
import './Profession.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Profession({ isLoggedIn }) {
	const nextPage = '/my-profile'
	return (
		<>
			<Header isLoggedIn={isLoggedIn} nextPage={nextPage} />
			<main className="profession">Profession</main>
			<Footer />
		</>
	)
}

export default Profession
