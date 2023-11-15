import './Layouts.scss'
import React from 'react'
import PropTypes from 'prop-types'

function Layouts({ setComplitedLayouts }) {
	React.useEffect(() => {
		setComplitedLayouts(true)
	})
	return <section className="layouts">Layouts</section>
}

Layouts.propTypes = {
	setComplitedLayouts: PropTypes.func.isRequired,
}

export default Layouts
