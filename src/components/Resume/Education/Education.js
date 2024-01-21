/* eslint-disable no-unused-vars */
import '../PersonalData/PersonalData.scss'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import './Education.scss'
import ResumeTitle from '../ResumeComponents/ResumeTitle/ResumeTitle'
import AddButton from '../ResumeComponents/AddButton/AddButton'
import FormInput from '../ResumeComponents/FormInput/FormInput'
import PeriodInput from '../ResumeComponents/PeriodInput/PeriodInput'
import AddedEducation from './AddedEducation/AddedEducation'

const Education = ({
  values,
  handleChangeWithValidation,
  setValues,
  handleCheckboxChange,
  setAllTillPresent,
  allTillPresent,
  handleAddEducationChange,
  handleAddEducationCheckboxChange,
  setHasEducation,
  hasEducation,
}) => {
  // Если появился добавленное образование, основная кнопка "Добавить" удаляется
  const [noAddedEducation, setNoAddedEducation] = useState(true)

  const addEducation = () => {
    setNoAddedEducation(false)
    setValues({
      ...values,
      educations: [
        ...values.educations,
        { id: uuidv4(), education_period_checkbox: false },
      ],
    })
  }

  const deleteEducation = educationId => {
    const educationToBeRemoved = values.educations.find(
      m => educationId === m.id
    )
    setValues({
      ...values,
      educations: values.educations.filter(
        item => item.id !== educationToBeRemoved.id
      ),
    })
  }

  // Если addedEducation пустой, то возвращается основная кнопка "Добавить"
  useEffect(() => {
    if (values.educations?.length === 0) {
      setNoAddedEducation(true)
    }
  }, [values.educations?.length])

  const handleTitleCheckboxClick = () => {
    setHasEducation(!hasEducation)
    setValues({ ...values, educations: [] })
    setNoAddedEducation(true)

    if (hasEducation) {
      setValues(prevValues => ({
        ...prevValues,
        education_period_checkbox: false,
      }))
      setAllTillPresent({ ...allTillPresent, 0: false })
    }
  }

  useEffect(() => {
    if (!hasEducation) {
      setValues(prevValues => ({
        ...prevValues,
        university_name: '',
        university_specialization: '',
        education_level: '',
      }))
    }
  }, [hasEducation])

  return (
    <section className="education">
      <ResumeTitle
        title="Образование"
        checkbox
        name="education_checkbox"
        values={values}
        handleCheckboxChange={handleCheckboxChange}
        checkboxText="Отсутствует"
        onClick={handleTitleCheckboxClick}
        checkboxId="title-education-checkbox"
      />
      <div className="education__form-container">
        <FormInput
          values={values}
          handleChange={handleChangeWithValidation}
          name="university_name"
          label="Название вуза"
          disabled={!hasEducation}
        />
        <PeriodInput
          namePeriod="education_period_checkbox"
          year={['year_education_start', 'year_education_end']}
          monthPeriod={[]}
          education
          labelOne="Год поступления"
          labelTwo="Год окончания"
          i="1"
          tillPresent
          handleCheckboxChange={handleCheckboxChange}
          values={values}
          setValues={setValues}
          setAllTillPresent={setAllTillPresent}
          allTillPresent={allTillPresent}
          handleChange={handleChangeWithValidation}
          disabled={!hasEducation}
        />
        <FormInput
          values={values}
          handleChange={handleChangeWithValidation}
          name="university_specialization"
          label="Специальность"
          disabled={!hasEducation}
        />
        <FormInput
          values={values}
          handleChange={handleChangeWithValidation}
          name="education_level"
          label="Степень"
          disabled={!hasEducation}
        />
        {values.educations.map(education => (
          <AddedEducation
            values={education}
            deleteEducation={deleteEducation}
            addEducation={addEducation}
            i={education.id}
            key={education.id}
            handleChange={handleAddEducationChange}
            handleCheckboxChange={handleAddEducationCheckboxChange}
            setValues={setValues}
            setAllTillPresent={setAllTillPresent}
            allTillPresent={allTillPresent}
            allValues={values}
            hasEducation={hasEducation}
          />
        ))}
        {noAddedEducation && values.educations?.length === 0 && (
          <AddButton handleClick={addEducation} disabled={!hasEducation} />
        )}
      </div>
    </section>
  )
}

Education.propTypes = {
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
  setAllTillPresent: PropTypes.func.isRequired,
  allTillPresent: PropTypes.shape({
    value: PropTypes.bool,
  }),
  handleChangeWithValidation: PropTypes.func.isRequired,
  handleAddEducationChange: PropTypes.func.isRequired,
  handleAddEducationCheckboxChange: PropTypes.func.isRequired,
  setHasEducation: PropTypes.func.isRequired,
  hasEducation: PropTypes.bool.isRequired,
}

Education.defaultProps = {
  values: {},
  checkboxValues: {},
  allTillPresent: {},
}

export default Education
