import React from 'react'
import PropTypes from 'prop-types'
import './RegistrationField.scss'

const RegistrationField = ({
	label,
	name,
	placeholder,
	type,
	errors,
	handleChange,
	values,
}) => (
	<div className="registration-field">
		<label className="registration-field__label" htmlFor={name}>
			{label}
		</label>
		<input
			id={name}
			className="registration-field__input"
			name={name}
			type={type}
			placeholder={placeholder}
			required
			onChange={handleChange}
			value={values[name] || ''}
		/>
		{errors && (
			<span className="registration-field__input-error">
				{errors[name]}
			</span>
		)}
	</div>
)

RegistrationField.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	errors: PropTypes.objectOf(PropTypes.string).isRequired,
	handleChange: PropTypes.func.isRequired,
	values: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default RegistrationField
