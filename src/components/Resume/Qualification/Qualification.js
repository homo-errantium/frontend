import '../PersonalData/PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'

function Qualification({ setComplitedStepsQualification }) {
	React.useEffect(() => {
		setComplitedStepsQualification(true)
	})
	return <section className="personal-data">Повышение квалификации</section>
}

Qualification.propTypes = {
	setComplitedStepsQualification: PropTypes.func.isRequired,
}

export default Qualification
