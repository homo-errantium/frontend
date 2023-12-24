import PropTypes from 'prop-types'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Cv.scss'
import EditIcon from '../../../img/edit-icon-black.svg'
import DownloadIcon from '../../../img/download-icon.svg'
import DeleteIcon from '../../../img/trash-icon-red.svg'
import ellipsesIcon from '../../../img/ellipses-icon.svg'
import ResultResume from '../../Resume/ResultResume/ResultResume'
import { handleGeneratePdf } from '../../Utils/Utils'

const Cv = ({
  // isEditMod,
  cv,
  deletePopupSetState,
  currentResume,
  setCurrentResume,
  setIsEditMod,
  // setValues,
  // values,
}) => {
  const resumePath = `/resume/result/${cv.id}`
  const navigate = useNavigate()
  const [isEditCvPopupOpen, setIsEditCvPopupOpen] = useState(false)

  const openCvMenu = () => {
    setIsEditCvPopupOpen(!isEditCvPopupOpen)
  }

  const handleDownload = () => {
    handleGeneratePdf(navigate, resumePath)
  }

  const handleEdit = async () => {
    await setIsEditMod(true)
    await setCurrentResume({ ...currentResume, ...cv })
    navigate('/resume')
  }

  const handleDelete = () => {
    setCurrentResume({ ...currentResume, ...cv })
    deletePopupSetState(true)
  }

  return (
    <div className="profile__cv-container">
      <div className="profile__cv-image-container">
        <div className="profile__cv-content">
          <ResultResume values={cv} />
        </div>
        <button
          type="button"
          className="profile__cv-changes-button link"
          onClick={openCvMenu}
        >
          <img src={ellipsesIcon} alt="многоточие" className="link" />
        </button>
      </div>
      <span className="profile__cv-name">{cv.resume_name}</span>
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
  // isEditMod: PropTypes.bool.isRequired,
  // values: PropTypes.objectOf(
  //   PropTypes.oneOfType([
  //     PropTypes.string,
  //     PropTypes.number,
  //     PropTypes.bool,
  //     PropTypes.arrayOf(
  //       PropTypes.oneOfType([
  //         PropTypes.string,
  //         PropTypes.objectOf(
  //           PropTypes.oneOfType([
  //             PropTypes.string,
  //             PropTypes.number,
  //             PropTypes.bool,
  //           ])
  //         ),
  //       ])
  //     ),
  //   ])
  // ),
  // setValues: PropTypes.func.isRequired,
  setIsEditMod: PropTypes.func,
  cv: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.objectOf(
            PropTypes.oneOfType([
              PropTypes.string,
              PropTypes.number,
              PropTypes.bool,
            ])
          ),
        ])
      ),
    ])
  ),
  deletePopupSetState: PropTypes.func.isRequired,
  setCurrentResume: PropTypes.func,
  currentResume: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.objectOf(
            PropTypes.oneOfType([
              PropTypes.string,
              PropTypes.number,
              PropTypes.bool,
            ])
          ),
        ])
      ),
    ])
  ).isRequired,
}

Cv.defaultProps = {
  cv: {},
  // values: {},
  setCurrentResume: () => {},
  setIsEditMod: () => {},
}

export default Cv
