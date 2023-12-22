/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { useClipboard } from 'use-clipboard-copy'
import { useLocation } from 'react-router-dom'
import './Recommendations.scss'
import ResumeTitle from '../ResumeComponents/ResumeTitle/ResumeTitle'
import RecommedationImage from '../../../img/recommendations.png'
import {
  EXPERIENCE_RECOMMENDATIONS,
  // EXPERIENCE_DUTIES_RECOMMENDATIONS,
  RESULT_RECOMMENDATIONS,
} from '../../../constants/recommendations'
import PlusIcon from '../../../img/plus-icon.svg'
import ArrowDown from '../../../img/arrow-down-icon.svg'
import CopyIcon from '../../../img/copy-icon.svg'

const Recommendations = ({ duties }) => {
  const clipboard = useClipboard()
  const location = useLocation()
  const path = location.pathname

  const isPersonalDataPage = () => !!(path === '/resume/personal-data')
  const isExperiencePage = () => !!(path === '/resume/experience')
  const isResultPage = () => !!(path === '/resume/result')

  // TODO: подставить нужные подсказки
  // Массив с данными для выбора профессии на странице "Опыт работы":
  const jobs = [
    {
      id: 0,
      job: 'UI/UX designer',
      recommendations: [
        {
          text: 'Провел тщательное исследование пользовательского поведения, что позволило выявить слабые места в интерфейсе. Внес изменения, которые повысили удовлетворенность клиентов на 25% и сократили время выполнения ключевых задач.',
        },
        {
          text: 'Разработал интерактивные прототипы, которые были использованы для тестирования пользовательских сценариев. Полученные данные использовались для внесения корректив в дизайн, что привело к существенному улучшению пользовательского восприятия.',
        },
      ],
    },
    {
      id: 1,
      job: 'Frontend Developer',
      recommendations: [{ text: 'front 1' }, { text: 'front 2' }],
    },
    {
      id: 2,
      job: 'Backend Developer',
      recommendations: [{ text: 'back 1' }, { text: 'back 2' }],
    },
    {
      id: 3,
      job: 'Project Manager',
      recommendations: [{ text: 'PM 1' }, { text: 'PM 2' }],
    },
    {
      id: 4,
      job: 'System analyst',
      recommendations: [{ text: 'SA 1' }, { text: 'SA 2' }],
    },
    {
      id: 5,
      job: 'QA-engineer',
      recommendations: [{ text: 'QA 1' }, { text: 'QA 2' }],
    },
  ]
  const [jobChoice, setJobChoice] = useState(false)
  const [chosenJob, setChosenJob] = useState(jobs[0].job)
  const chooseThisJob = evt => {
    const newJob = evt.target.innerText
    setChosenJob(newJob)
    setJobChoice(false)
  }
  const recommendationsToRender = jobs.find(
    item => item.job === chosenJob
  ).recommendations

  return (
    <section className="recommend">
      <ResumeTitle title="Рекомендации" />
      {isPersonalDataPage() && (
        <>
          <img
            className="recommend__image"
            alt="девушка и конструктор"
            src={RecommedationImage}
          />
          <p className="recommend__comment">
            Чтобы повысить шансы успешного трудоустройства, предлагаем следовать
            нашим рекомендациям.
          </p>
        </>
      )}
      {isExperiencePage() && !duties && (
        <div className="recommend__container">{EXPERIENCE_RECOMMENDATIONS}</div>
      )}
      {isExperiencePage() && duties && (
        <div className="recommend__container">
          <p className="recommend__text">
            Обязанности — это не должностная инструкция, их разбивают на группы
            в зависимости от исполняемых ролей. Не нужно подробно описывать все
            задачи — чем конкретнее, тем лучше:
          </p>
          <br />
          <div className="recommend__duties-formula">
            <span className="recommend__duties-component">
              обязанность <br /> (что сделали)
            </span>
            <img className="recommend__plus-icon" alt="плюсик" src={PlusIcon} />
            <span className="recommend__duties-component">
              инструмент <br /> (как делали)
            </span>
          </div>
          <br />
          <p className="recommend__text">
            Достижения — это активные действия, которые принесли измеримый
            результат. Они показывают вашу результативность и профессиональный
            рост. Чтобы рассказать о своих достижениях, используйте прошедшее
            время и глаголы. Сами глаголы нужно писать в прошедшем времени и
            совершённом виде. Вы отвечаете на вопрос «Что сделал(а)?» — это
            конкретизирует описание.
          </p>
          <br />
          <p className="recommend__text">
            Релевантный опыт — это подтверждение того, что кандидат уже решал
            похожие задачи в условиях, приближённых к тем, которые его ждут в
            новой компании. Специалисты с релевантным опытом знают предметную
            область и успели поработать с разными инструментами. Поэтому
            функции, методики и используемые технологии отходят на второй план,
            а на первый выходят достижения.Не указывайте контекст, если он
            нерелевантен желаемой должности.
          </p>
          <br />
          <p className="recommend__text">
            Если релевантный опыт практически отсутствует, кандидат может
            показать свои софтскилы. Можно показать нерелевантный опыт
            максимально компактно — на него невозможно полноценно перенести
            требования и потребности компании. Скорее всего, в нерелевантных
            местах работы были другие задачи, инструменты и сфера деятельности.
            Не бойтесь сокращать опыт, но не убирайте его совсем. Делайте акцент
            на достижениях.
          </p>
          <br />
          <p className="recommend__text">
            Ниже выбирайте свою специальность и смотрите удачные примеры
            заполнения поля «обязанности».
          </p>
          <div className="recommend__job-selector-container">
            <input
              id="professions"
              name="professions"
              value={chosenJob}
              className={classNames(
                'recommend__job-selector link',
                jobChoice && 'recommend__job-selector_active'
              )}
              onClick={() => {
                setJobChoice(!jobChoice)
              }}
              readOnly
            />
            <img
              className="recommend__arrow-icon link"
              alt="плюсик"
              src={ArrowDown}
              onClick={() => {
                setJobChoice(!jobChoice)
              }}
            />

            {jobChoice && (
              <div className="recomment__job-list">
                {jobs.map(item => (
                  <span
                    className={classNames(
                      'recommend__job-option',
                      chosenJob === item.job && 'recommend__job-option_selected'
                    )}
                    key={item.id}
                    onClick={chooseThisJob}
                  >
                    {item.job}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="recommend__duties-examples-container">
            {recommendationsToRender.map(recs => {
              const { text } = recs
              return (
                <div className="recommend__duties-example">
                  <span className="recommend__duties-example-text">{text}</span>
                  <button
                    type="button"
                    className="recommend__duties-example-copy link"
                    onClick={() => {
                      clipboard.copy(text)
                    }}
                  >
                    <img
                      src={CopyIcon}
                      alt="иконка сохранения"
                      className="recommend__duties-example-copy-icon"
                    />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      )}
      {isResultPage() && (
        <div className="recommend__container">{RESULT_RECOMMENDATIONS}</div>
      )}
    </section>
  )
}

Recommendations.propTypes = {
  duties: PropTypes.bool,
}
Recommendations.defaultProps = {
  duties: false,
}

export default Recommendations
