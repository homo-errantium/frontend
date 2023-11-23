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
	selectedInputFirst,
	ordinaryInputFirst,
	selectedInputSecond,
	ordinaryInputSecond,
	options,
}) => (
	<div className="double-input">
		<div className="double-input__box">
			<div className="double-input__label-container">
				<label className="double-input__label" htmlFor="double-input">
					{firstLabel}
				</label>
				{tip && <Tip text={tipText} />}
			</div>
			{selectedInputFirst && (
				<div className="double-input__select-wrapper">
					<select
						id="double-input"
						className="double-input__field double-input__field_selected"
					>
						{options.map(value => (
							<option
								value={value}
								className="double-input__field"
								key={value}
							>
								{value}
							</option>
						))}
					</select>
				</div>
			)}
			{ordinaryInputFirst && (
				<input
					className="double-input__field"
					disabled={disabled}
					id="double-input"
					placeholder={placeholder}
				/>
			)}
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
					{selectedInputSecond && (
						<div className="double-input__select-wrapper">
							<select
								id="double-input"
								className="double-input__field double-input__field_selected"
							>
								{options.map(value => (
									<option
										value={value}
										className="double-input__option"
										key={value}
									>
										{value}
									</option>
								))}
							</select>
						</div>
					)}
					{ordinaryInputSecond && (
						<input
							className="double-input__field double-input__field_short"
							disabled={disabled}
							id="double-input"
						/>
					)}
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
	selectedInputFirst: PropTypes.bool,
	ordinaryInputFirst: PropTypes.bool,
	selectedInputSecond: PropTypes.bool,
	ordinaryInputSecond: PropTypes.bool,
	options: PropTypes.arrayOf(PropTypes.string),
}

DoubleInput.defaultProps = {
	tip: false,
	tipText: '',
	disabled: false,
	doubleInput: false,
	placeholder: '',
	secondLabel: '',
	selectedInputFirst: false,
	ordinaryInputFirst: false,
	selectedInputSecond: false,
	ordinaryInputSecond: false,
	options: [],
}

export default DoubleInput
