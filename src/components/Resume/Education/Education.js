import '../PersonalData/PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'

function Education({ setComplitedSteps }) {
	React.useEffect(() => {
		setComplitedSteps(true)
	})
	return <section className="personal-data">Образование</section>
}

Education.propTypes = {
	setComplitedSteps: PropTypes.func.isRequired,
}

export default Education
