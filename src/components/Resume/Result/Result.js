import './Result.scss'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import createLinkIcon from '../../../img/create-link-icon.svg'
import DownloadIcon from '../../../img/download-icon.svg'
import ResultResume from '../ResultResume/ResultResume'

function Result({ values, image /* checkboxValues */ }) {
  const resultResumeRef = useRef(null)
  const navigate = useNavigate()
  const handleGenerateLink = () => {
    console.log('тут должен быть другой код')
  }

  const handleGeneratePdf = async () => {
    await navigate('/result-resume')
    window.print()
    navigate(-1)
  }

  return (
    <section className="result">
      <div className="result__header">
        <h1 className="result__title">Готовое резюме</h1>
        <div className="result__buttons-container">
          <button
            className="result__button"
            type="button"
            label="button"
            onClick={() => {
              handleGenerateLink()
            }}
          >
            <img
              className="result__button-icon"
              alt="стрелка вниз"
              src={createLinkIcon}
            />
            Создать ссылку
          </button>
          <button
            className="result__button"
            type="button"
            label="button"
            onClick={() => {
              handleGeneratePdf()
            }}
          >
            <img
              className="result__button-icon"
              alt="стрелка вниз"
              src={DownloadIcon}
            />
            PDF
          </button>
        </div>
      </div>
      <div className="result__content" ref={resultResumeRef}>
        <ResultResume values={values} image={image} />
      </div>
    </section>
  )
}

Result.propTypes = {
  image: PropTypes.string,
  values: PropTypes.objectOf(
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
}

Result.defaultProps = { values: {}, image: '' }

export default Result
