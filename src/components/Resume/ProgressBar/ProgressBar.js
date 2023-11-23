import React from 'react'
import PropTypes from 'prop-types'
import './ProgressBar.scss'

// Чтобы использовать этот компонент, необходимо передать номер шага от 1 до 7 числом в качестве пропса
// Пример шага #3: <ProgressBar step={3} />

const ProgressBar = ({ step }) => (
    <div className="progress-bar">
        <div className={`progress-bar_step progress-bar_step_${step}`} />
    </div>
)

ProgressBar.propTypes = {
    step: PropTypes.number.isRequired,
}

export default ProgressBar
