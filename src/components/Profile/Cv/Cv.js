import PropTypes from 'prop-types'
import { useState } from 'react'
import './Cv.scss'
import EditIcon from '../../../img/edit-icon-black.svg'
import DownloadIcon from '../../../img/download-icon.svg'
import DeleteIcon from '../../../img/trash-icon-red.svg'
import ellipsesIcon from '../../../img/ellipses-icon.svg'

const Cv = ({ cv, deletePopupSetState }) => {
  const { image, name } = cv
  const [isEditCvPopupOpen, setIsEditCvPopupOpen] = useState(false)

  const openCvMenu = () => {
    setIsEditCvPopupOpen(!isEditCvPopupOpen)
  }

  const handleEdit = () => {
    console.log('edit cv')
  }

  const handleDownload = () => {
    console.log('download cv')
  }

  const handleDelete = () => {
    deletePopupSetState(true)
  }

  return (
    <div className="profile__cv-container">
      <div className="profile__cv-image-container">
        <img src={image} alt="резюме" className="profile__cv-image" />
        <button
          type="button"
          className="profile__cv-changes-button link"
          onClick={openCvMenu}
        >
          <img src={ellipsesIcon} alt="многоточие" className="link" />
        </button>
      </div>
      <span className="profile__cv-name">{name}</span>
      {isEditCvPopupOpen && (
        <div className="profile__cv-menu">
          <button
            className="profile__cv-menu-option link"
            type="button"
            onClick={handleEdit}
          >
            <img
              src={EditIcon}
              alt="карандашик"
              className="profile__cv-menu-icon"
            />
            Редактировать
          </button>
          <button
            className="profile__cv-menu-option link"
            type="button"
            onClick={handleDownload}
          >
            <img
              src={DownloadIcon}
              alt="скачивание"
              className="profile__cv-menu-icon"
            />
            Скачать в PDF
          </button>
          <button
            className="profile__cv-menu-option profile__cv-menu-option_red link"
            type="button"
            onClick={handleDelete}
          >
            <img
              src={DeleteIcon}
              alt="скачивание"
              className="profile__cv-menu-icon"
            />
            Удалить резюме
          </button>
        </div>
      )}
    </div>
  )
}

Cv.propTypes = {
  cv: PropTypes.bool.isRequired,
  deletePopupSetState: PropTypes.func.isRequired,
}

export default Cv
