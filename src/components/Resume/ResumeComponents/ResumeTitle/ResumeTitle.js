import React from 'react'
import PropTypes from 'prop-types'
import './ResumeTitle.scss'
import Checkbox from '../Checkbox/Checkbox'

const ResumeTitle = ({
	title,
	checkbox,
	checkboxText,
	checkboxId,
	onClick,
}) => (
	<div className="resume-title__container">
		<h1 className="resume-title__text">{title}</h1>
		{checkbox && (
			<Checkbox
				checkboxText={checkboxText}
				checkboxId={checkboxId}
				onClick={onClick}
			/>
		)}
	</div>
)
ResumeTitle.propTypes = {
	title: PropTypes.node.isRequired,
	checkbox: PropTypes.bool,
	checkboxText: PropTypes.string,
	checkboxId: PropTypes.string,
	onClick: PropTypes.func,
}

ResumeTitle.defaultProps = {
	checkbox: false,
	checkboxText: '',
	checkboxId: '',
	onClick: () => {},
}

export default ResumeTitle
