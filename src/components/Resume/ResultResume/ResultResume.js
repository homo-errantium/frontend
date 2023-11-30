import './ResultResume.scss'
import PropTypes from 'prop-types'
import Keanu from '../../../img/Keanu-Reeves.jpg'

function ResultResume({ values, checkboxValues }) {
  // eslint-disable-next-line no-console
  console.log('🚀 ~ file: ResultResume.js:5 ~ ResultResume ~ values:', values)
  // eslint-disable-next-line no-console
  console.log(
    '🚀 ~ file: ResultResume.js:5 ~ ResultResume ~ values:',
    checkboxValues
  )
  const newValues = {}

  newValues.firstName = 'Keanu'
  newValues.secondName = 'Reeves'
  newValues.status = 'в  поиске'
  newValues.dateBirth = '2 september 1964'
  newValues.currentCity = 'New-York'
  newValues.company = 'Matrix Inc.'
  newValues.company_website = 'https://keanu-reeves.org/'
  newValues.current_position = 'superhero'
  newValues.userEmail = 'JownWick@mail.ru'
  newValues.userTelegram = '@dog_protector'
  newValues.userPhone = '+79534993162'

  return (
    <div className="result-resume" id="resultResume">
      {/* ------ блок с ФИО ------*/}
      <div className="result-resume__user-info">
        <span className="result-resume__user-name">
          {`ФИ: ${newValues.firstName} ${newValues.secondName}`}
        </span>
        <span className="result-resume__user-status">
          {`Статус соискателя: ${newValues.status}`}
        </span>
        <span className="result-resume__user-date-birth">
          {`Дата рождения: ${newValues.dateBirth}`}
        </span>
        <span className="result-resume__user-place-birth">
          {`Город проживания: ${newValues.currentCity}`}
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
          {`Почта: ${newValues.userEmail}`}
        </span>
        <span className="result-resume__user-telegram">
          {`Telegram: ${newValues.userTelegram}`}
        </span>
        <span className="result-resume__user-phone">
          {`Телефон: ${newValues.userPhone}`}
        </span>
      </div>
      {/* ------ блок опыта работы ------*/}
      <div className="result-resume__experience">
        <h2 className="result-resume__experience-title">опыт работы:</h2>
        <span className="result-resume__experience-company">
          {`Название компании: ${newValues.userEmail}`}
        </span>
        <span className="result-resume__experience-start">
          {`Дата начала работы: ${newValues.userEmail}`}
        </span>
        <span className="result-resume__experience-end">
          {`Дата окончания работы: ${newValues.userEmail}`}
        </span>
        <span className="result-resume__experience-company-site">
          {`Сайт компании: ${newValues.userEmail}`}
        </span>
        <span className="result-resume__experience-duty">
          {`Обязанности: ${newValues.userEmail}`}
        </span>
        <span className="result-resume__experience-achiev">
          {`Достижения: ${newValues.userEmail}`}
        </span>
      </div>
      {/* ------ блок ссылки ------*/}
      <div className="result-resume__links">
        <h2 className="result-resume__links-title">ссылки:</h2>
        <span className="result-resume__link-github">
          {`GitHub: ${newValues.userEmail}`}
        </span>
        <span className="result-resume__link-Behance">
          {`Behance: ${newValues.userEmail}`}
        </span>
        <span className="result-resume__link-about-user">
          {`О себе: ${newValues.userEmail}`}
        </span>
      </div>
      {/* ------ блок навыки ------*/}
      <div className="result-resume__skills">
        <h2 className="result-resume__skills-title">навыки:</h2>
        <p className="result-resume__skills-description">
          {`${newValues.userEmail}`}
        </p>
      </div>
      {/* ------ блок повышение квалификации ------*/}
      <div className="result-resume__training">
        <h2 className="result-resume__training-title">
          повышение квалификаии:
        </h2>
        <span className="result-resume__training-company">
          {`Название компании, проводившей обучение: ${newValues.userEmail}`}
        </span>
        <span className="result-resume__training-course">
          {`Пройденный курс: ${newValues.userEmail}`}
        </span>
        <span className="result-resume__training-speciality">
          {`Специальность: ${newValues.userEmail}`}
        </span>
        <span className="result-resume__training-description">
          {`Описание полученного опыта: ${newValues.userEmail}`}
        </span>
      </div>
      {/* ------ блок языки ------*/}
      <div className="result-resume__language">
        <h2 className="result-resume__language-title">языки:</h2>
        <p className="result-resume__language-description">
          {`${newValues.userEmail}`}
        </p>
      </div>
      {/* ------ блок образование ------*/}
      <div className="result-resume__education">
        <h2 className="result-resume__education-title">образование:</h2>
        <span className="result-resume__education-company">
          {`Название вуза: ${newValues.userEmail}`}
        </span>
        <span className="result-resume__education-speciality">
          {`Специальность: ${newValues.userEmail}`}
        </span>
        <span className="result-resume__education-degree">
          {`Степень: ${newValues.userEmail}`}
        </span>
      </div>

      {/* ------ блок проекты и портфолио ------*/}
      <div className="result-resume__projects">
        <h2 className="result-resume__projects-title">проекты и портфолио:</h2>
        <span className="result-resume__project-name">
          {`Название проекта: ${newValues.userEmail}`}
        </span>
        <span className="result-resume__project-description">
          {`О проекте: ${newValues.userEmail}`}
        </span>
      </div>

      {/* ------ блок о себе ------*/}
      <div className="result-resume__about-user">
        <h2 className="result-resume__about-user-title">о себе:</h2>
        <p className="result-resume__about-user-description">
          {`Хобби: ${newValues.userEmail}`}
        </p>
      </div>
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
