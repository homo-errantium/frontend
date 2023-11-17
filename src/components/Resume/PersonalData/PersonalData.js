import './PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'
import ResumeTitle from '../ResumeComponents/ResumeTitle/ResumeTitle'

function PersonalData({ setCompletedSteps }) {
	React.useEffect(() => {
		setCompletedSteps(true)
	})

	return (
		<section className="personal-data">
			<ResumeTitle title="Персональные данные" />
			<div className="personal-data__form">
				<div className="personal-data__left-column"></div>
				<div className="personal-data__right-column"></div>
			</div>
		</section>
	)
}

PersonalData.propTypes = {
	setCompletedSteps: PropTypes.func.isRequired,
}

export default PersonalData
