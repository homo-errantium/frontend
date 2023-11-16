import '../PersonalData/PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'

function About({ setComplitedSteps }) {
	React.useEffect(() => {
		setComplitedSteps(true)
	})
	return <section className="personal-data">Обо мне</section>
}

About.propTypes = {
	setComplitedSteps: PropTypes.func.isRequired,
}

export default About
