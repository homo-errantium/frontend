import React from 'react'
import './ResultResume.scss'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { months } from '../../../constants/months'

function ResultResume({ values }) {
  // const userAllLang = values.languages
  const userAllJobs = values.jobs
  const userAllQualifications = values.qualifications
  const userAllEducations = values.educations
  const userAllPortfolio = values.portfolio
  const location = useLocation()

  // function checkboxConvert(value, text) {
  //   return value || text
  // }

  function currentAge() {
    const birthdayArr = values.birthday?.split('.')
    // eslint-disable-next-line eqeqeq
    if (birthdayArr) {
      const today = new Date()
      const year = today.getFullYear() - birthdayArr[2]
      switch (year) {
        case 11:
        case 12:
        case 13:
        case 14:
          return `${year} лет`

        default:
          switch (year % 10) {
            case 1:
              return `${year} год`

            case 2:
            case 3:
            case 4:
              return `${year} года`

            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 0:
              return `${year} лет`
            default:
              break
          }
          break
      }
      return `${year} лет`
    }
    return ''
  }

  function monthConvert(monthNumber) {
    let result = []
    if (monthNumber !== '') {
      result = months.find(({ id }) => id === monthNumber)
      if (result !== undefined) return result.long
    }
    return 'По настоящее время'
  }

  function absentValues(currentValue) {
    return currentValue ? `${currentValue}` : ''
  }

  return (
    <div
      className={classNames(
        'result-resume',
        location.pathname === '/my-profile' && 'result-resume_padding'
      )}
      id="resultResume"
    >
      {/* ------блок  фото ------*/}
      <img
        src={values.img}
        alt="фото соискателя"
        className="result-resume__user-photo"
      />
      {/* ------ блок с ФИО ------*/}
      <div className="result-resume__user-info">
        <span className="result-resume__user-name">
          {`${absentValues(values.name)} ${values.surname ?? ''}`}
        </span>
        {/* <br /> */}
        <span className="result-resume__user-desired-position">
          {`${absentValues(values.desired_position)}`}
        </span>
        {/* <br /> */}
        <ul className="result-resume__user-birth-info-list">
          <li className="result-resume__user-birth-info-list-item">
            <span className="result-resume__user-date-birth">
              {`${absentValues(currentAge())}`}
            </span>
          </li>
          <li className="result-resume__user-birth-info-list-item">
            <span className="result-resume__user-place-birth">
              {`${absentValues(values.city)}`}
            </span>
          </li>
        </ul>
      </div>

      {/* ------ блок опыта работы ------*/}

      <div className="result-resume__experience">
        <h2 className="result-resume__title">Опыт работы</h2>

        <div className="result-resume__experience-children">
          <div className="result-resume__info">
            <span className="result-resume__date">
              {`${monthConvert(values.month_work_start)}
            ${values.year_work_start} - ${monthConvert(values.month_work_end)}${
              values.year_work_end ? ` ${values.year_work_end}` : ''
            }`}
            </span>
            <span className="result-resume__experience-position">
              {absentValues(values.current_position)}
            </span>
            <Link
              to={values.company_website}
              className="result-resume__organization result-resume__experience-company"
            >
              {absentValues(values.company)}
            </Link>
          </div>
          <div className="result-resume__experience-duty-info">
            <h4 className="result-resume__experience-duty-title">
              Обязанности
            </h4>
            <span className="result-resume__experience-duty">
              {absentValues(values.duties)}
            </span>
          </div>
        </div>

        {React.Children.toArray(
          userAllJobs?.map(item => (
            <div className="result-resume__experience-children">
              <div className="result-resume__info">
                <span className="result-resume__date">
                  {`${monthConvert(item.month_work_start)}
            ${item.year_work_start} - ${monthConvert(item.month_work_end)}${
              item.year_work_end ? ` ${item.year_work_end}` : ''
            }`}
                </span>
                <span className="result-resume__experience-position">
                  {absentValues(item.current_position)}
                </span>
                <Link
                  to={item.company_website}
                  className="result-resume__organization result-resume__experience-company"
                >
                  {absentValues(item.company)}
                </Link>
              </div>
              <div className="result-resume__experience-duty-info">
                <h4 className="result-resume__experience-duty-title">
                  Обязанности
                </h4>
                <span className="result-resume__experience-duty">
                  {absentValues(item.duties)}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ------ блок с контактами ------*/}
      <div className="result-resume__user-contacts">
        <h2 className="result-resume__user-contacts-title">Контакты</h2>
        <span className="result-resume__user-mail">
          {absentValues(values.email)}
        </span>
        <br />
        <span className="result-resume__user-telegram">
          {absentValues(values.telegram)}
        </span>
        <br />
        <span className="result-resume__user-phone">
          {absentValues(values.phone)}
        </span>
      </div>

      {/* ------ блок ссылки ------*/}
      {/* <div className="result-resume__links">
        <h2 className="result-resume__links-title">ссылки:</h2>
        <br />
        <span className="result-resume__link-another-site">
          {`Персональная страница: ${absentValues(values.website_link)}`}
        </span>
      </div> */}
      {/* ------ блок навыки ------*/}
      {/* <div className="result-resume__skills">
        <h2 className="result-resume__skills-title">навыки:</h2>
        <p className="result-resume__skills-description">
          {`${values.userEmail}`}
        </p>
      </div> */}
      {/* ------ блок образование ------*/}
      <div className="result-resume__education">
        <h2 className="result-resume__title">Образование</h2>
        <div className="result-resume__info">
          <span className="result-resume__date">
            {`${
              values.year_education_start
                ? ` ${values.year_education_start}`
                : ''
            } - ${
              values.year_education_end ? ` ${values.year_education_end}` : ''
            }`}
          </span>
          <br />
          <span className="result-resume__organization">
            {values.university_name}
          </span>
        </div>
        <div className="result-resume__info">
          <span className="result-resume__education-speciality">
            {values.university_specialization}
          </span>
          <br />
          <span className="result-resume__education-degree">
            {values.education_level}
          </span>
        </div>
        {React.Children.toArray(
          userAllEducations?.map(item => (
            <div className="result-resume__education">
              <div className="result-resume__info">
                <span className="result-resume__date">
                  {`${
                    item.year_education_start
                      ? ` ${item.year_education_start}`
                      : ''
                  } - ${
                    item.year_education_end ? ` ${item.year_education_end}` : ''
                  }`}
                </span>
                <br />
                <span className="result-resume__organization">
                  {item.university_name}
                </span>
              </div>
              <div className="result-resume__info">
                <span className="result-resume__education-speciality">
                  {item.university_specialization}
                </span>
                <br />
                <span className="result-resume__education-degree">
                  {item.education_level}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
      {/* ------ блок повышение квалификации ------*/}
      <div className="result-resume__training">
        <h2 className="result-resume__title">Повышение квалификации</h2>
        <div className="result-resume__info">
          <span className="result-resume__date">
            {`${monthConvert(values.qual_start)}${
              values.year_qual_start ? ` ${values.year_qual_start}` : ''
            } - ${monthConvert(values.qual_end)}${
              values.year_qual_end ? ` ${values.year_qual_end}` : ''
            }`}
          </span>
          <span className="result-resume__organization">
            {values.organization}
          </span>
        </div>
        <div className="result-resume__info">
          <br />
          <span className="result-resume__training-course">
            {values.course_name}
          </span>
          <br />
          <span className="result-resume__training-speciality">
            {values.work_specialization}
          </span>
          <br />
          <span className="result-resume__training-description">
            {values.description_experience}
          </span>
          <br />
          <span className="result-resume__training-skills">
            {`Навыки: ${values.skills}`}
          </span>
          <br />
          <span className="result-resume__training-skills">
            {`Ссылка на дипломную работу: ${values.diploma_link}`}
          </span>
        </div>
        {React.Children.toArray(
          userAllQualifications?.map(item => (
            <div className="result-resume__training">
              <div className="result-resume__info">
                <span className="result-resume__date">
                  {`${monthConvert(item.qual_start)}${
                    item.year_qual_start ? ` ${item.year_qual_start}` : ''
                  } - ${monthConvert(item.qual_end)}${
                    item.year_qual_end ? ` ${item.year_qual_end}` : ''
                  }`}
                </span>
                <span className="result-resume__organization">
                  {item.organization}
                </span>
              </div>
              <div className="result-resume__info">
                <br />
                <span className="result-resume__training-course">
                  {item.course_name}
                </span>
                <br />
                <span className="result-resume__training-speciality">
                  {item.work_specialization}
                </span>
                <br />
                <span className="result-resume__training-description">
                  {item.description_experience}
                </span>
                <br />
                <span className="result-resume__training-skills">
                  {`Навыки: ${item.skills}`}
                </span>
                <br />
                <span className="result-resume__training-skills">
                  {`Ссылка на дипломную работу: ${item.diploma_link}`}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ------ блок языки ------*/}
      {/* <div className="result-resume__language">
        <h2 className="result-resume__language-title">языки:</h2>
        {userAllLang
          ? React.Children.toArray(
              userAllLang?.map(item => (
                <>
                  <p className="result-resume__language-description">
                    {`${item.language} (${item.level})`}
                  </p>
                  <br />
                </>
              ))
            )
          : 'Отсутствует'}
      </div> */}

      {/* ------ блок проекты и портфолио ------*/}
      <div className="result-resume__projects">
        <h2 className="result-resume__projects-title">проекты и портфолио:</h2>
        <span className="result-resume__project-name">
          {`Название проекта: ${values.project_name}`}
        </span>
        <br />
        <span className="result-resume__project-description">
          {`Краткое описание проекта: ${values.project_description}`}
        </span>
        <br />
        <span className="result-resume__project-link">
          {`Ссылка на проект: ${values.project_link}`}
        </span>
        {React.Children.toArray(
          userAllPortfolio?.map(item => (
            <>
              <h4 className="result-resume__projects-title">
                проекты и портфолио:
              </h4>
              <span className="result-resume__project-name">
                {`Название проекта: ${item.project_name}`}
              </span>
              <br />
              <span className="result-resume__project-description">
                {`Краткое описание проекта: ${item.project_description}`}
              </span>
              <br />
              <span className="result-resume__project-link">
                {`Ссылка на проект: ${item.project_link}`}
              </span>
            </>
          ))
        )}
      </div>

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
  // checkboxValues: PropTypes.objectOf(
  //   PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  // ),
}

ResultResume.defaultProps = {
  values: {},
}

export default ResultResume
