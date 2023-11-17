import React from 'react'
import PropTypes from 'prop-types'
import './ResumeTitle.scss'

const ResumeTitle = ({ title }) => <h1 className="resume-title">{title}</h1>

ResumeTitle.propTypes = {
	title: PropTypes.string.isRequired,
}

export default ResumeTitle
