import '../PersonalData/PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'

function Experience({ setComplitedStepsExperience }) {
	React.useEffect(() => {
		setComplitedStepsExperience(true)
	})

	return <section className="personal-data">Опыт работы</section>
}

Experience.propTypes = {
	setComplitedStepsExperience: PropTypes.func.isRequired,
}

export default Experience
