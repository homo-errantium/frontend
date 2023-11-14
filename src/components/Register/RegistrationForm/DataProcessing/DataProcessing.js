import React from 'react'
import PropTypes from 'prop-types'
import './DataProcessing.scss'

const DataProcessing = ({ text, handleChange }) => (
	<div className="data-processing">
		<input
			className="data-processing__checkbox"
			type="checkbox"
			id="dataProcessing"
			name="dataProcessing"
			onChange={handleChange}
			required
		/>
		<span className="data-processing__text">{text}</span>
	</div>
)

DataProcessing.propTypes = {
	text: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
}

export default DataProcessing
