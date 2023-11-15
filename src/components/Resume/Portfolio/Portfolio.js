import './Portfolio.scss'
import React from 'react'
import PropTypes from 'prop-types'

function Portfolio({ setComplitedStepsPortfolio }) {
	React.useEffect(() => {
		setComplitedStepsPortfolio(true)
	})
	return <section className="portfolio">Portfolio</section>
}

Portfolio.propTypes = {
	setComplitedStepsPortfolio: PropTypes.func.isRequired,
}

export default Portfolio
