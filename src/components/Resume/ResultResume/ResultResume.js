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
        <p className="result-resume__user-name">
          {`${absentValues(values.name)} ${values.surname ?? ''}`}
        </p>
        {/* <br /> */}
        <p className="result-resume__user-desired-position">
          {`${absentValues(values.desired_position)}`}
        </p>
        {/* <br /> */}
        <ul className="result-resume__user-birth-info-list">
          <li className="result-resume__user-birth-info-list-item">
            <span className="result-resume__user-birth-info-list-item-element">
              {`${absentValues(currentAge())}`}
            </span>
          </li>
          <li className="result-resume__user-birth-info-list-item">
            <span className="result-resume__user-birth-info-list-item-element">
              {`${absentValues(values.city)}`}
            </span>
          </li>
        </ul>
      </div>

      {/* ------ блок опыта работы ------*/}

      <div className="result-resume__container">
        <h2 className="result-resume__title">Опыт работы</h2>

        <div className="result-resume__children">
          <div className="result-resume__first-column">
            <p className="result-resume__date">
              {`${monthConvert(values.month_work_start)}
            ${values.year_work_start} - ${monthConvert(values.month_work_end)}${
              values.year_work_end ? ` ${values.year_work_end}` : ''
            }`}
            </p>
            <p className="result-resume__paragraph result-resume__paragraph_position">
              {absentValues(values.current_position)}
            </p>
            <Link
              to={values.company_website}
              className="result-resume__organization result-resume__experience-company"
            >
              {absentValues(values.company)}
            </Link>
          </div>
          <div className="result-resume__second-column">
            <h4 className="result-resume__experience-duty-title">
              Обязанности
            </h4>
            <p className="result-resume__paragraph">
              {absentValues(values.duties)}
            </p>
          </div>
        </div>

        {React.Children.toArray(
          userAllJobs?.map(item => (
            <div className="result-resume__children">
              <div className="result-resume__first-column">
                <p className="result-resume__date">
                  {`${monthConvert(item.month_work_start)}
            ${item.year_work_start} - ${monthConvert(item.month_work_end)}${
              item.year_work_end ? ` ${item.year_work_end}` : ''
            }`}
                </p>
                <p className="result-resume__paragraph result-resume__paragraph_position">
                  {absentValues(item.current_position)}
                </p>
                <Link
                  to={item.company_website}
                  className="result-resume__organization result-resume__experience-company"
                >
                  {absentValues(item.company)}
                </Link>
              </div>
              <div className="result-resume__second-column">
                <h4 className="result-resume__experience-duty-title">
                  Обязанности
                </h4>
                <p className="result-resume__paragraph">
                  {absentValues(item.duties)}
                </p>
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
      <div className="result-resume__container">
        <h2 className="result-resume__title">Образование</h2>
        <div className="result-resume__children">
          <div className="result-resume__first-column">
            <p className="result-resume__date">
              {`${
                values.year_education_start
                  ? ` ${values.year_education_start}`
                  : ''
              } - ${
                values.year_education_end ? ` ${values.year_education_end}` : ''
              }`}
            </p>
            <p className="result-resume__paragraph">{values.university_name}</p>
          </div>
          <div className="result-resume__second-column">
            <p className="result-resume__paragraph">
              {values.university_specialization}
            </p>
            <br />
            <p className="result-resume__paragraph">{values.education_level}</p>
          </div>
        </div>
        {React.Children.toArray(
          userAllEducations?.map(item => (
            <div className="result-resume__children">
              <div className="result-resume__first-column">
                <p className="result-resume__date">
                  {`${
                    item.year_education_start
                      ? ` ${item.year_education_start}`
                      : ''
                  } - ${
                    item.year_education_end ? ` ${item.year_education_end}` : ''
                  }`}
                </p>
                <p className="result-resume__paragraph">
                  {item.university_name}
                </p>
              </div>
              <div className="result-resume__second-column">
                <p className="result-resume__paragraph">
                  {item.university_specialization}
                </p>
                <br />
                <p className="result-resume__paragraph">
                  {item.education_level}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
      {/* ------ блок повышение квалификации ------*/}
      <div className="result-resume__container">
        <h2 className="result-resume__title">Повышение квалификации</h2>
        <div className="result-resume__children">
          <div className="result-resume__first-column">
            <p className="result-resume__date">
              {`${monthConvert(values.qual_start)}${
                values.year_qual_start ? ` ${values.year_qual_start}` : ''
              } - ${monthConvert(values.qual_end)}${
                values.year_qual_end ? ` ${values.year_qual_end}` : ''
              }`}
            </p>
            <p className="result-resume__paragraph">{values.organization}</p>
          </div>
          <div className="result-resume__second-column">
            <p className="result-resume__paragraph">{values.course_name}</p>
            <br />
            <p className="result-resume__paragraph">
              {values.work_specialization}
            </p>
            <br />
            <p className="result-resume__paragraph">
              {values.description_experience}
            </p>
            <br />
            <p className="result-resume__paragraph">
              {`Навыки: ${values.skills}`}
            </p>
            <br />
            <p className="result-resume__paragraph">
              {`Ссылка на дипломную работу: ${values.diploma_link}`}
            </p>
          </div>
        </div>
        {React.Children.toArray(
          userAllQualifications?.map(item => (
            <div className="result-resume__children">
              <div className="result-resume__first-column">
                <p className="result-resume__date">
                  {`${monthConvert(item.qual_start)}${
                    item.year_qual_start ? ` ${item.year_qual_start}` : ''
                  } - ${monthConvert(item.qual_end)}${
                    item.year_qual_end ? ` ${item.year_qual_end}` : ''
                  }`}
                </p>
                <p className="result-resume__paragraph">{item.organization}</p>
              </div>
              <div className="result-resume__second-column">
                <p className="result-resume__paragraph">{item.course_name}</p>
                <br />
                <p className="result-resume__paragraph">
                  {item.work_specialization}
                </p>
                <br />
                <p className="result-resume__paragraph">
                  {item.description_experience}
                </p>
                <br />
                <p className="result-resume__paragraph">
                  {`Навыки: ${item.skills}`}
                </p>
                <br />
                <p className="result-resume__paragraph">
                  {`Ссылка на дипломную работу: ${item.diploma_link}`}
                </p>
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
      <div className="result-resume__container">
        <h2 className="result-resume__title">Проекты и портфолио</h2>
        <div className="result-resume__project">
          <h5 className="result-resume__project-name">{values.project_name}</h5>
          <br />
          <p className="result-resume__paragraph">
            {values.project_description}
          </p>
          <br />
          <p className="result-resume__paragraph">
            {`Ссылка на проект: ${values.project_link}`}
          </p>
        </div>
        {React.Children.toArray(
          userAllPortfolio?.map(item => (
            <div className="result-resume__project">
              <h5 className="result-resume__project-name">
                {item.project_name}
              </h5>
              <br />
              <p className="result-resume__paragraph">
                {item.project_description}
              </p>
              <br />
              <p className="result-resume__paragraph">
                {`Ссылка на проект: ${item.project_link}`}
              </p>
            </div>
          ))
        )}
      </div>

      {/* ------ блок о себе ------ */}
      <div className="result-resume__container">
        <h2 className="result-resume__title">Обо мне</h2>
        <p className="result-resume__paragraph">{values.about}</p>
      </div>
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
