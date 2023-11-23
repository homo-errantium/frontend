import React from 'react'
import PropTypes from 'prop-types'
import './ResumeTitle.scss'

const ResumeTitle = ({ title, checkbox, checkboxText }) => (
    <div className="resume-title__container">
        <h1 className="resume-title__text">{title}</h1>
        {checkbox && (
            <div className="resume-title__checkbox-container">
                <label
                    className="resume-title__checkbox-label"
                    htmlFor="title-checkbox"
                >
                    <input
                        type="checkbox"
                        id="title-checkbox"
                        className="resume-title__checkbox"
                    />
                    <span className="resume-title__checkbox-text">
                        {checkboxText}
                    </span>
                </label>
            </div>
        )}
    </div>
)
ResumeTitle.propTypes = {
    title: PropTypes.node.isRequired,
    checkbox: PropTypes.bool,
    checkboxText: PropTypes.string,
}

ResumeTitle.defaultProps = {
    checkbox: false,
    checkboxText: '',
}

export default ResumeTitle
