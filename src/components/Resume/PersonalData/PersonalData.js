import './PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'

function PersonalData({ setComplitedSteps }) {
	React.useEffect(() => {
		setComplitedSteps(true)
	})

	return <section className="personal-data">Персональные данные</section>
}

PersonalData.propTypes = {
	setComplitedSteps: PropTypes.func.isRequired,
}

export default PersonalData
