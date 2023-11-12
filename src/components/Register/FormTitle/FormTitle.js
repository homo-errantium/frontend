import React from 'react'
import './FormTitle.scss'

const FormTitle = ({ greeting }) => (
	<div className="form-title__container">
		<h1 className="form-title__greeting">{greeting}</h1>
	</div>
)

export default FormTitle
