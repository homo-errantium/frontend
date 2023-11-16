import '../PersonalData/PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'

function Portfolio({ setCompletedSteps }) {
	React.useEffect(() => {
		setCompletedSteps(true)
	})
	return <section className="personal-data">Проекты и портфолио</section>
}

Portfolio.propTypes = {
	setCompletedSteps: PropTypes.func.isRequired,
}

export default Portfolio
