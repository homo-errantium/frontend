import '../PersonalData/PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'

function Experience({ setCompletedSteps }) {
	React.useEffect(() => {
		setCompletedSteps(true)
	})

	return <section className="personal-data">Опыт работы</section>
}

Experience.propTypes = {
	setCompletedSteps: PropTypes.func.isRequired,
}

export default Experience
