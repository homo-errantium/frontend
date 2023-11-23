import React from 'react'
import PropTypes from 'prop-types'
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

Main.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}

export default Main
