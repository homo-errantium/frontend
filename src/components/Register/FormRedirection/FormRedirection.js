import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './FormRedirection.scss'

const FormRedirection = ({ text, button, path }) => (
	<div className="form-redirection_container">
		<p className="form-redirection__text">{text}</p>
		<Link className="form-redirection__button link" to={path}>
			{button}
		</Link>
	</div>
)

FormRedirection.propTypes = {
	text: PropTypes.string.isRequired,
	button: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
}

export default FormRedirection
