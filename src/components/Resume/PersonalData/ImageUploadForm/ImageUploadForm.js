/* eslint-disable jsx-a11y/label-has-associated-control,
          jsx-a11y/label-has-for */
import './ImageUploadForm.scss'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tip from '../../ResumeComponents/Tip/Tip'

const ImageUploadForm = ({ label, tip, tipText }) => {
  const [file, setFile] = useState()
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <section className="image-upload">
      <div className="image-upload__form">
        <div className="image-upload__label-container">
          <label className="image-upload__label" htmlFor="image-label">
            {label}
          </label>
          {tip && <Tip text={tipText} />}
        </div>
        <div className="image-upload__photo-container">
          <img className="image-upload__photo" alt={file} src={file} />
          <label className="image-upload__button" htmlFor="image-input">
            <input
              className="image-upload__input"
              id="image-input"
              type="file"
              accept=".png,.jpg,.jpeg,"
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
    </section>
  )
}
ImageUploadForm.propTypes = {
  label: PropTypes.string,
  tip: PropTypes.bool,
  tipText: PropTypes.node,
}
ImageUploadForm.defaultProps = {
  label: '',
  tip: false,
  tipText: '',
}
export default ImageUploadForm
