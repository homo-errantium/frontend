import '../PersonalData/PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'

function Skills({ setComplitedSteps }) {
	React.useEffect(() => {
		setComplitedSteps(true)
	})
	return <section className="personal-data">Навыки</section>
}

Skills.propTypes = {
	setComplitedSteps: PropTypes.func.isRequired,
}

export default Skills
