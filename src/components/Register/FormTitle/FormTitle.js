import React from 'react'
import PropTypes from 'prop-types'
import './FormTitle.scss'

const FormTitle = ({ greeting }) => (
	<div className="form-title__container">
		<h1 className="form-title__greeting">{greeting}</h1>
	</div>
)

FormTitle.propTypes = {
	greeting: PropTypes.string.isRequired,
}

export default FormTitle
