import '../PersonalData/PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'

function Portfolio({ setComplitedSteps }) {
	React.useEffect(() => {
		setComplitedSteps(true)
	})
	return <section className="personal-data">Проекты и портфолио</section>
}

Portfolio.propTypes = {
	setComplitedSteps: PropTypes.func.isRequired,
}

export default Portfolio
