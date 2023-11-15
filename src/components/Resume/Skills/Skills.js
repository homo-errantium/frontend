import './Skills.scss'
import React from 'react'
import PropTypes from 'prop-types'

function Skills({ setComplitedStepsSkills }) {
	React.useEffect(() => {
		setComplitedStepsSkills(true)
	})
	return <section className="skills">Skills</section>
}

Skills.propTypes = {
	setComplitedStepsSkills: PropTypes.func.isRequired,
}

export default Skills
