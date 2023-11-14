import React from 'react'
import './Main.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Main({ isLoggedIn }) {
	const nextPage = '/resume'
	return (
		<>
			<Header isLoggedIn={isLoggedIn} nextPage={nextPage} />
			<main className="main">Main</main>
			<Footer />
		</>
	)
}

export default Main
