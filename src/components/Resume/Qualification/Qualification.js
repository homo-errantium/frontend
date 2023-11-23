import '../PersonalData/PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'

function Qualification({ setCompletedSteps }) {
  React.useEffect(() => {
    setCompletedSteps(true)
  })
  return <section className="personal-data">Повышение квалификации</section>
}

Qualification.propTypes = {
  setCompletedSteps: PropTypes.func.isRequired,
}

export default Qualification
