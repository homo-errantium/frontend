import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './FormInput.scss'
import Tip from '../Tip/Tip'

const FormInput = ({ label, tip, tipText, extraInputClass, disabled }) => (
	<div className="form-input">
		<div className="form-input__label-container">
			<label className="form-input__label" htmlFor="form-input">
				{label}
			</label>
			{tip && <Tip text={tipText} />}
		</div>
		<textarea
			disabled={disabled}
			id="form-input"
			className={classNames(
				'form-input__field',
				extraInputClass && `form-input__field_${extraInputClass}`
			)}
		/>
	</div>
)
FormInput.propTypes = {
	label: PropTypes.string.isRequired,
	tip: PropTypes.bool,
	tipText: PropTypes.node,
	extraInputClass: PropTypes.string,
	disabled: PropTypes.bool,
}

FormInput.defaultProps = {
	tip: false,
	tipText: '',
	extraInputClass: '',
	disabled: false,
}

export default FormInput
