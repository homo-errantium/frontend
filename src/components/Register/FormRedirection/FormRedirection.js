import React from 'react'
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

export default FormRedirection
