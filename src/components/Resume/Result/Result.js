import './Result.scss'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import createLinkIcon from '../../../img/create-link-icon.svg'
import DownloadIcon from '../../../img/download-icon.svg'
import ResultResume from '../ResultResume/ResultResume'
import { handleGeneratePdf } from '../../Utils/Utils'

function Result({ values }) {
  const navigate = useNavigate()
  const handleGenerateLink = () => {
    // eslint-disable-next-line no-console
    console.log('тут должен быть другой код')
  }
  const resumePath = `/resume/result/${values.id}`

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
              handleGeneratePdf(navigate, resumePath)
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
      <div className="result__content">
        <ResultResume values={values} />
      </div>
    </section>
  )
}

Result.propTypes = {
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

Result.defaultProps = { values: {} }

export default Result
