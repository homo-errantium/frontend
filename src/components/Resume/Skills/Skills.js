import '../PersonalData/PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'

function Skills({ setComplitedStepsSkills }) {
	React.useEffect(() => {
		setComplitedStepsSkills(true)
	})
	return <section className="personal-data">Навыки</section>
}

Skills.propTypes = {
	setComplitedStepsSkills: PropTypes.func.isRequired,
}

export default Skills
