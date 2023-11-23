import './PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'

function PersonalData({ setCompletedSteps }) {
    React.useEffect(() => {
        setCompletedSteps(true)
    })

    return <section className="personal-data">Персональные данные</section>
}

PersonalData.propTypes = {
    setCompletedSteps: PropTypes.func.isRequired,
}

export default PersonalData
