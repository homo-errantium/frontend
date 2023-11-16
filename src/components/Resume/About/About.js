import '../PersonalData/PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'

function About({ setComplitedStepsAbout }) {
	React.useEffect(() => {
		setComplitedStepsAbout(true)
	})
	return <section className="personal-data">Обо мне</section>
}

About.propTypes = {
	setComplitedStepsAbout: PropTypes.func.isRequired,
}

export default About
