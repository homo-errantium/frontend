import '../PersonalData/PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'

function Education({ setComplitedStepsEducation }) {
	React.useEffect(() => {
		setComplitedStepsEducation(true)
	})
	return <section className="personal-data">Образование</section>
}

Education.propTypes = {
	setComplitedStepsEducation: PropTypes.func.isRequired,
}

export default Education
