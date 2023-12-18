/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react'
import './ImageUpload.scss'

const ImageUpload = () => {
  const [image, setImage] = useState()
  function handleChange(e) {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    const img = new Image()
    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      context.drawImage(img, 0, 0)
      const dataUrl = canvas.toDataURL(e.target.files[0].type)
      setImage(dataUrl)
    }
    img.src = URL.createObjectURL(e.target.files[0])
  }

  return (
    <section className="image-upload-form">
      <div className="image-upload-form__form">
        <div className="image-upload-form__photo-container">
          {image && (
            <img className="image-upload-form__photo" alt={image} src={image} />
          )}
          <label
            className="image-upload-form__button"
            htmlFor="image-input-photo"
          >
            <input
              className="image-upload-form__input"
              name="photo"
              id="image-input-photo"
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

export default ImageUpload
