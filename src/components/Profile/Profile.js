import React from 'react'
import PropTypes from 'prop-types'
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

Profile.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
}

export default Profile
