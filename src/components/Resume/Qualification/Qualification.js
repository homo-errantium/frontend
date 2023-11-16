import '../PersonalData/PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'

function Qualification({ setComplitedSteps }) {
	React.useEffect(() => {
		setComplitedSteps(true)
	})
	return <section className="personal-data">Повышение квалификации</section>
}

Qualification.propTypes = {
	setComplitedSteps: PropTypes.func.isRequired,
}

export default Qualification
