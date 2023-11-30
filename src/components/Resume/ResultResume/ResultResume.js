import './ResultResume.scss'
import PropTypes from 'prop-types'
import Keanu from '../../../img/Keanu-Reeves.jpg'

function ResultResume({ values }) {
  // eslint-disable-next-line no-console
  console.log('🚀 ~ file: ResultResume.js:5 ~ ResultResume ~ values:', values)

  const testValue = {
    firstName: 'Keanu',
    secondName: 'Reeves',
    company: 'Matrix Inc.',
    company_website: 'https://keanu-reeves.org/',
    current_position: 'superhero',
    duties: 'dog protector',
    month_work_start: 'mart',
    month_work_end: 'september',
    year_work_start: '2014',
    year_work_end: '2023',
  }

  return (
    <div className="result-resume" id="resultResume">
      {/* <div className="result-resume__user-info"> */}
      <span className="result-resume__user-name">
        {`ФИ: ${testValue.firstName} ${testValue.secondName}`}
      </span>
      <img
        src={Keanu}
        alt="фото соискателя"
        className="result-resume__user-photo"
      />
      {/* </div> */}
    </div>
  )
}

ResultResume.propTypes = {
  values: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
}

ResultResume.defaultProps = { values: {} }

export default ResultResume
