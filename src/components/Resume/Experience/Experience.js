/* eslint-disable jsx-a11y/no-static-element-interactions */
import '../PersonalData/PersonalData.scss'
import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './Experience.scss'
import PropTypes from 'prop-types'
import ResumeTitle from '../ResumeComponents/ResumeTitle/ResumeTitle'
import AddButton from '../ResumeComponents/AddButton/AddButton'
import FormInput from '../ResumeComponents/FormInput/FormInput'
import PeriodInput from '../ResumeComponents/PeriodInput/PeriodInput'
import Job from './Job/Job'
import { JOB_TIP } from '../../../constants/tips'

const Experience = ({
  values,
  setValues,
  handleCheckboxChange,
  hasExperience,
  setHasExperience,
  setAllTillPresent,
  allTillPresent,
  setDuties,
  errors,
  handleChangeWithValidation,
  setErrors,
  handleAddJobChange,
  handleAddJobCheckboxChange,
}) => {
  // console.log('🚀 ~ file: Experience.js:30 ~ handleChange:', handleChange)
  // console.log('🚀 ~ file: Experience.js:30 ~ handleChange:', handleAddJobChange)
  // Если появился добавленный опыт, основная кнопка "Добавить" удаляется
  const [noAddedExperience, setNoAddedExperience] = useState(true)

  const handleTitleCheckboxClick = () => {
    setHasExperience(!hasExperience)
    setValues({ ...values, jobs: [] })
    setNoAddedExperience(true)
    setErrors({})

    if (hasExperience) {
      setValues(prevValues => ({
        ...prevValues,
        work_period_experience_checkbox: false,
      }))
      setAllTillPresent({ ...allTillPresent, 0: false })
    }
  }

  const addExperience = () => {
    setNoAddedExperience(false)
    setValues({
      ...values,
      jobs: [
        ...values.jobs,
        { id: uuidv4(), work_period_experience_checkbox: false },
      ],
    })
  }

  const deleteExperience = jobId => {
    const experienceToBeRemoved = values.jobs.find(m => jobId === m.id)
    setValues({
      ...values,
      jobs: values.jobs.filter(item => item.id !== experienceToBeRemoved.id),
    })
  }

  // Если addedExperience пустой, то возвращается основная кнопка "Добавить"
  useEffect(() => {
    if (values.jobs.length === 0) {
      setNoAddedExperience(true)
    }
  }, [values.jobs.length])

  const handleBackToBasicRecommend = () => {
    setDuties(false)
  }
  return (
    <section className="experience personal-data">
      <ResumeTitle
        name="work_experience_checkbox"
        values={values}
        handleCheckboxChange={handleCheckboxChange}
        title="Опыт работы"
        checkbox
        checkboxText="Нет опыта"
        checkboxId="title-checkbox"
        onClick={handleTitleCheckboxClick}
        handleBackToBasicRecommend={handleBackToBasicRecommend}
      />
      <div className="experience__form-container">
        <div
          className="experience__basic-recommend"
          onClick={handleBackToBasicRecommend}
          onKeyDown={handleBackToBasicRecommend}
          onFocus={handleBackToBasicRecommend}
        >
          <FormInput
            name="company"
            values={values}
            handleChange={handleChangeWithValidation}
            label="Название компании"
            disabled={!hasExperience}
            setValues={setValues}
            errors={errors}
            id="0"
          />
          <FormInput
            name="company_website"
            values={values}
            handleChange={handleChangeWithValidation}
            label="Сайт компании"
            disabled={!hasExperience}
            setValues={setValues}
            errors={errors}
            id="0"
          />
          <FormInput
            name="current_position"
            values={values}
            handleChange={handleChangeWithValidation}
            label="Должность"
            tip
            tipText={JOB_TIP}
            disabled={!hasExperience}
            setValues={setValues}
            errors={errors}
            id="0"
          />
          <PeriodInput
            labelOne="Дата начала работы"
            labelTwo="Дата окончания работы"
            month
            disabled={!hasExperience}
            i="0"
            tillPresent
            handleCheckboxChange={handleCheckboxChange}
            namePeriod="work_period_experience_checkbox"
            monthPeriod={['month_work_start', 'month_work_end']}
            year={['year_work_start', 'year_work_end']}
            values={values}
            setAllTillPresent={setAllTillPresent}
            allTillPresent={allTillPresent}
            handleChange={handleChangeWithValidation}
            errors={errors}
            allValues={values}
            setValues={setValues}
          />
        </div>
        <FormInput
          name="duties"
          values={values}
          handleChange={handleChangeWithValidation}
          label="Обязанности"
          extraInputClass="responsibilities"
          disabled={!hasExperience}
          setValues={setValues}
          setDuties={setDuties}
          errors={errors}
          id="0"
        />
        {values.jobs.map(experience => (
          <Job
            values={experience}
            allValues={values}
            handleChange={handleAddJobChange}
            hasExperience={hasExperience}
            deleteExperience={deleteExperience}
            addExperience={addExperience}
            i={experience.id}
            key={experience.id}
            handleCheckboxChange={handleAddJobCheckboxChange}
            setValues={setValues}
            setAllTillPresent={setAllTillPresent}
            allTillPresent={allTillPresent}
            setDuties={setDuties}
            handleBackToBasicRecommend={handleBackToBasicRecommend}
          />
        ))}
        {noAddedExperience && values.jobs.length === 0 && (
          <AddButton disabled={!hasExperience} handleClick={addExperience} />
        )}
      </div>
    </section>
  )
}

Experience.propTypes = {
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
  setValues: PropTypes.func.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  checkboxValues: PropTypes.shape({
    checkbox: PropTypes.bool,
  }),
  hasExperience: PropTypes.bool.isRequired,
  setHasExperience: PropTypes.func.isRequired,
  setAllTillPresent: PropTypes.func.isRequired,
  allTillPresent: PropTypes.shape({
    value: PropTypes.bool,
  }),
  setDuties: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  handleChangeWithValidation: PropTypes.func.isRequired,
  setErrors: PropTypes.func.isRequired,
  handleAddJobChange: PropTypes.func.isRequired,
  handleAddJobCheckboxChange: PropTypes.func.isRequired,
}

Experience.defaultProps = {
  values: {},
  checkboxValues: {},
  allTillPresent: {},
}

export default Experience
