import './ResultResume.scss'
import PropTypes from 'prop-types'
import Keanu from '../../../img/Keanu-Reeves.jpg'

function ResultResume({ values, checkboxValues }) {
  // eslint-disable-next-line no-console
  console.log('🚀 ~ file: ResultResume.js:5 ~ ResultResume ~ values:', values)
  // eslint-disable-next-line no-console
  console.log(checkboxValues)

  function changeMonth(month) {
    return month < 10 ? `0${month}` : `${month}`
  }
  function absentValues(currentValue) {
    return currentValue ? `${currentValue}` : `Отсутствует`
  }

  return (
    <div className="result-resume" id="resultResume">
      {/* ------ блок с ФИО ------*/}
      <div className="result-resume__user-info">
        <h2 className="result-resume__user-info-title">персональные данные:</h2>
        <span className="result-resume__user-name">
          {`ФИ: ${absentValues(values.name)} ${values.surname ?? ''}`}
        </span>
        <br />
        {/* <span className="result-resume__user-status">
          {`Статус соискателя: ${values.status}`}
        </span> */}
        <span className="result-resume__user-date-birth">
          {`Дата рождения: ${absentValues(values.birthday)}`}
        </span>
        <br />
        <span className="result-resume__user-place-birth">
          {`Город проживания: ${absentValues(values.city)}`}
        </span>
        <br />
        <span className="result-resume__user-desired-position">
          {`Желаемая должность: ${absentValues(values.desired_position)}`}
        </span>
      </div>
      {/* ------блок  фото ------*/}
      <img
        src={Keanu}
        alt="фото соискателя"
        className="result-resume__user-photo"
      />
      {/* ------ блок с контактами ------*/}
      <div className="result-resume__user-contacts">
        <h2 className="result-resume__user-contacts-title">контакты:</h2>
        <span className="result-resume__user-mail">
          {`Почта: ${absentValues(values.email)}`}
        </span>
        <br />
        <span className="result-resume__user-telegram">
          {`Telegram: ${absentValues(values.telegram)}`}
        </span>
        <br />
        <span className="result-resume__user-phone">
          {`Телефон: ${absentValues(values.phone)}`}
        </span>
      </div>
      {/* ------ блок опыта работы ------*/}
      <div className="result-resume__experience">
        <h2 className="result-resume__experience-title">опыт работы:</h2>
        <span className="result-resume__experience-company">
          {`Название компании: ${absentValues(values.company)}`}
        </span>
        <br />
        <span className="result-resume__experience-start">
          {`Дата начала работы: ${changeMonth(
            absentValues(values.month_work_start)
          )}${values.year_work_start ? `/${values.year_work_start}` : ''}`}
        </span>
        <br />
        <span className="result-resume__experience-end">
          {`Дата окончания работы: ${changeMonth(
            absentValues(values.month_work_start)
          )}${values.year_work_end ? `/${values.year_work_end}` : ''}`}
        </span>
        <br />
        {/* <span className="result-resume__experience-end">
          {`Дата окончания работы: ${changeMonth(values.month_work_end)}/${
            values.year_work_end
          }`}
        </span> */}

        <span className="result-resume__experience-company-site">
          {`Сайт компании: ${absentValues(values.company_website)}`}
        </span>
        <br />
        <span className="result-resume__experience-duty">
          {`Обязанности: ${absentValues(values.duties)}`}
        </span>
        <br />
        {/* <span className="result-resume__experience-achiev">
          {`Достижения: ${values.userEmail}`}
        </span> */}
      </div>
      {/* ------ блок ссылки ------*/}
      <div className="result-resume__links">
        <h2 className="result-resume__links-title">ссылки:</h2>
        <span className="result-resume__link-github">
          {`GitHub: ${absentValues(values.githab)}`}
        </span>
        <br />
        <span className="result-resume__link-Behance">
          {`Behance: ${absentValues(values.behance)}`}
        </span>
        <br />
        <span className="result-resume__link-another-site">
          {`Персональная страница: ${absentValues(values.website_link)}`}
        </span>
        <br />
        <span className="result-resume__link-about-user">
          {`Видео о себе: ${absentValues(values.video_link)}`}
        </span>
      </div>
      {/* ------ блок навыки ------*/}
      {/* <div className="result-resume__skills">
        <h2 className="result-resume__skills-title">навыки:</h2>
        <p className="result-resume__skills-description">
          {`${values.userEmail}`}
        </p>
      </div> */}
      {/* ------ блок повышение квалификации ------*/}
      {/* <div className="result-resume__training">
        <h2 className="result-resume__training-title">
          повышение квалификаии:
        </h2>
        <span className="result-resume__training-company">
          {`Название компании, проводившей обучение: ${values.userEmail}`}
        </span>
        <span className="result-resume__training-course">
          {`Пройденный курс: ${values.userEmail}`}
        </span>
        <span className="result-resume__training-speciality">
          {`Специальность: ${values.userEmail}`}
        </span>
        <span className="result-resume__training-description">
          {`Описание полученного опыта: ${values.userEmail}`}
        </span>
      </div> */}
      {/* ------ блок языки ------*/}
      <div className="result-resume__language">
        <h2 className="result-resume__language-title">языки:</h2>
        <p className="result-resume__language-description">
          {`${absentValues(values.language_1)} (${
            values.language_level_1 ?? ''
          })`}
        </p>
      </div>
      {/* ------ блок образование ------*/}
      {/* <div className="result-resume__education">
        <h2 className="result-resume__education-title">образование:</h2>
        <span className="result-resume__education-company">
          {`Название вуза: ${values.userEmail}`}
        </span>
        <span className="result-resume__education-speciality">
          {`Специальность: ${values.userEmail}`}
        </span>
        <span className="result-resume__education-degree">
          {`Степень: ${values.userEmail}`}
        </span>
      </div> */}

      {/* ------ блок проекты и портфолио ------*/}
      {/* <div className="result-resume__projects">
        <h2 className="result-resume__projects-title">проекты и портфолио:</h2>
        <span className="result-resume__project-name">
          {`Название проекта: ${values.userEmail}`}
        </span>
        <span className="result-resume__project-description">
          {`О проекте: ${values.userEmail}`}
        </span>
      </div> */}

      {/* ------ блок о себе ------
      <div className="result-resume__about-user">
        <h2 className="result-resume__about-user-title">о себе:</h2>
        <p className="result-resume__about-user-description">
          {`Хобби: ${values.userEmail}`}
        </p>
      </div> */}
    </div>
  )
}

ResultResume.propTypes = {
  values: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  checkboxValues: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
}

ResultResume.defaultProps = { values: {}, checkboxValues: {} }

export default ResultResume
