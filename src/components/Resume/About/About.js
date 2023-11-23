import '../PersonalData/PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'

function About({ setCompletedSteps }) {
  React.useEffect(() => {
    setCompletedSteps(true)
  })
  return <section className="personal-data">Обо мне</section>
}

About.propTypes = {
  setCompletedSteps: PropTypes.func.isRequired,
}

export default About
