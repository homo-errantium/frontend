import './Result.scss'
import PropTypes from 'prop-types'
import jsPDF from 'jspdf'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
// import { saveAs } from 'file-saver'
// import ReactPDF from '@react-pdf/renderer'
import ResultResume from '../ResultResume/ResultResume'
import DownloadIcon from '../../../img/download-icon.svg'

function Result({ values, checkboxValues }) {
  const resultResumeRef = useRef(null)
  const navigate = useNavigate()
  // const savePDF = () => {
  //   ReactPDF.render(<ResultResume />)
  // }

  const handleGenerateWord = () => {
    const preHTML =
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
      "xmlns:w='urn:schemas-microsoft-com:office:word' " +
      "xmlns='http://www.w3.org/TR/REC-html40'>" +
      "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>"
    const postHTML = '</body></html>'
    const sourceHTML = preHTML + resultResumeRef.current.innerHTML + postHTML

    const source = `data:application/vnd.ms-word;charset=utf-8,${encodeURIComponent(
      sourceHTML
    )}`
    const fileDownload = document.createElement('a')
    document.body.appendChild(fileDownload)
    fileDownload.href = source
    fileDownload.download = 'resume.doc'
    fileDownload.click()
    document.body.removeChild(fileDownload)
  }

  const handleGeneratePdfFromPrint = async () => {
    await navigate('/result-resume')
    window.print({ saveAsPDF: true })
    navigate('/')
  }

  const handleGeneratePdf = () => {
    // eslint-disable-next-line new-cap
    const document = new jsPDF({
      format: 'a4',
      unit: 'px',
    })
    // Adding the fonts.
    document.setFont('open-sans', 'normal')

    document.html(resultResumeRef.current, {
      async callback(doc) {
        await doc.save('resume')
      },
    })
  }

  console.log(
    '🚀 ~ file: Result.js:54 ~ handleGeneratePdf ~ handleGeneratePdf:',
    handleGeneratePdfFromPrint
  )

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
              handleGeneratePdfFromPrint()
            }}
          >
            <img
              className="result__button-icon"
              alt="стрелка вниз"
              src={DownloadIcon}
            />
            PDF-test
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
          <button
            className="result__button"
            type="button"
            label="button"
            onClick={() => {
              handleGenerateWord()
            }}
          >
            <img
              className="result__button-icon"
              alt="стрелка вниз"
              src={DownloadIcon}
            />
            Word
          </button>
        </div>
      </div>
      <div className="result__content" ref={resultResumeRef}>
        <ResultResume values={values} checkboxValues={checkboxValues} />
      </div>
    </section>
  )
}

Result.propTypes = {
  values: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  checkboxValues: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.bool])),
}

Result.defaultProps = { values: {}, checkboxValues: {} }

export default Result
