import '../PersonalData/PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'

function Education({ setCompletedSteps }) {
    React.useEffect(() => {
        setCompletedSteps(true)
    })
    return <section className="personal-data">Образование</section>
}

Education.propTypes = {
    setCompletedSteps: PropTypes.func.isRequired,
}

export default Education
