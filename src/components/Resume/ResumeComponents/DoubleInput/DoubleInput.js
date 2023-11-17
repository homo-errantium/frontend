import React from 'react'
import PropTypes from 'prop-types'
import './DoubleInput.scss'
import Tip from '../Tip/Tip'

const DoubleInput = ({
	firstLabel,
	tip,
	tipText,
	disabled,
	doubleInput,
	secondLabel,
	placeholder,
}) => (
	<div className="double-input">
		<div className="double-input__box">
			<div className="double-input__label-container">
				<label className="double-input__label" htmlFor="double-input">
					{firstLabel}
				</label>
				{tip && <Tip text={tipText} />}
			</div>
			<input
				className="double-input__field"
				disabled={disabled}
				id="double-input"
				placeholder={placeholder}
			/>
		</div>
		<div className="double-input__box">
			{doubleInput && (
				<>
					<div className="double-input__label-container">
						<label
							className="double-input__label"
							htmlFor="double-input"
						>
							{secondLabel}
						</label>
						{tip && <Tip text={tipText} />}
					</div>
					<input
						className="double-input__field double-input__field_short"
						disabled={disabled}
						id="double-input"
					/>
				</>
			)}
		</div>
	</div>
)
DoubleInput.propTypes = {
	firstLabel: PropTypes.string.isRequired,
	secondLabel: PropTypes.string,
	tip: PropTypes.bool,
	tipText: PropTypes.node,
	disabled: PropTypes.bool,
	doubleInput: PropTypes.bool,
	placeholder: PropTypes.node,
}

DoubleInput.defaultProps = {
	tip: false,
	tipText: '',
	disabled: false,
	doubleInput: false,
	placeholder: '',
	secondLabel: '',
}

export default DoubleInput
