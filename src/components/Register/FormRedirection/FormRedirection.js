import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './FormRedirection.scss'

const FormRedirection = ({ page, text, button, path }) => (
    <div
        className={`form-redirection_container form-redirection_container_${page}`}
    >
        {text && <span className="form-redirection__text">{text}</span>}
        <Link className="form-redirection__button link" to={path}>
            {button}
        </Link>
    </div>
)

FormRedirection.propTypes = {
    page: PropTypes.string.isRequired,
    text: PropTypes.string,
    button: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}

FormRedirection.defaultProps = {
    text: '',
}

export default FormRedirection
