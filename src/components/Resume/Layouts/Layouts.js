import '../PersonalData/PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'

function Layouts({ setComplitedSteps }) {
	React.useEffect(() => {
		setComplitedSteps(true)
	})
	return <section className="personal-data">Макеты</section>
}

Layouts.propTypes = {
	setComplitedSteps: PropTypes.func.isRequired,
}

export default Layouts
