import './PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'

function PersonalData({ setComplitedStepsPersonalData }) {
	React.useEffect(() => {
		setComplitedStepsPersonalData(true)
	})

	return <section className="personal-data">Персональные данные</section>
}

PersonalData.propTypes = {
	setComplitedStepsPersonalData: PropTypes.func.isRequired,
}

export default PersonalData
