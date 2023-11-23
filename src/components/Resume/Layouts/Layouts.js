import '../PersonalData/PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'

function Layouts({ setCompletedSteps }) {
  React.useEffect(() => {
    setCompletedSteps(true)
  })
  return <section className="personal-data">Макеты</section>
}

Layouts.propTypes = {
  setCompletedSteps: PropTypes.func.isRequired,
}

export default Layouts
