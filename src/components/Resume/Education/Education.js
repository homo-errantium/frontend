import './Education.scss'
import React from 'react'
import PropTypes from 'prop-types'

function Education({ setComplitedStepsEducation }) {
	React.useEffect(() => {
		setComplitedStepsEducation(true)
	})
	return <section className="education">Education</section>
}

Education.propTypes = {
	setComplitedStepsEducation: PropTypes.func.isRequired,
}

export default Education
