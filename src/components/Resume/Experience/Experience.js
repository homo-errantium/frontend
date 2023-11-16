import '../PersonalData/PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'

function Experience({ setComplitedSteps }) {
	React.useEffect(() => {
		setComplitedSteps(true)
	})

	return <section className="personal-data">Опыт работы</section>
}

Experience.propTypes = {
	setComplitedSteps: PropTypes.func.isRequired,
}

export default Experience
