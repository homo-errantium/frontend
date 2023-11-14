import React from 'react'
import './Profile.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Profile({ isLoggedIn }) {
	const nextPage = '/*'
	return (
		<>
			<Header isLoggedIn={isLoggedIn} nextPage={nextPage} />
			<main className="profile">my Profile</main>
			<Footer />
		</>
	)
}

export default Profile
