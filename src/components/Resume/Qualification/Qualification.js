import './Qualification.scss'
import React from 'react'
import PropTypes from 'prop-types'

function Qualification({ setComplitedStepsQualification }) {
	React.useEffect(() => {
		setComplitedStepsQualification(true)
	})
	return <section className="qualification">Qualification</section>
}

Qualification.propTypes = {
	setComplitedStepsQualification: PropTypes.func.isRequired,
}

export default Qualification
