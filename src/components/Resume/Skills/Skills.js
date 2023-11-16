import '../PersonalData/PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'

function Skills({ setCompletedSteps }) {
	React.useEffect(() => {
		setCompletedSteps(true)
	})
	return <section className="personal-data">Навыки</section>
}

Skills.propTypes = {
	setCompletedSteps: PropTypes.func.isRequired,
}

export default Skills
