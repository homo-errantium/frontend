/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import './Job.scss'
import FormInput from '../../ResumeComponents/FormInput/FormInput'
import PeriodInput from '../../ResumeComponents/PeriodInput/PeriodInput'
import { JOB_TIP } from '../../../../constants/tips'
import PlusIcon from '../../../../img/plus-icon.svg'
import TrashIcon from '../../../../img/trash-icon.svg'

const Job = ({
  hasExperience,
  addExperience,
  deleteExperience,
  i,
  values,
  handleChange,
  checkboxValues,
  handleCheckboxChange,
  isTillPresent,
  setIsTillPresent,
  number,
  chosenMonth,
  setChosenMonth,
}) => {
  const handleDelete = () => deleteExperience(i)
  return (
    <>
      <div className="experience__job-container" id={i}>
        <FormInput
          name={`company${number}`}
          values={values}
          handleChange={handleChange}
          label="Название компании"
          disabled={!hasExperience}
        />
        <FormInput
          name={`company_website${number}`}
          values={values}
          handleChange={handleChange}
          label="Сайт компании"
          disabled={!hasExperience}
        />
        <FormInput
          name={`current_position${number}`}
          values={values}
          handleChange={handleChange}
          label="Должность"
          tipText={JOB_TIP}
          disabled={!hasExperience}
        />
        <PeriodInput
          labelOne="Дата начала работы"
          labelTwo="Дата окончания работы"
          month
          disabled={!hasExperience}
          i={i}
          tillPresent
          checkboxValues={checkboxValues}
          handleCheckboxChange={handleCheckboxChange}
          isTillPresent={isTillPresent}
          setIsTillPresent={setIsTillPresent}
          namePeriod={`work_period${number}`}
          monthPeriod={[`work_start${number}`, `work_end${number}`]}
          year={[`year_start${number}`, `year_end${number}`]}
          chosenMonth={chosenMonth}
          setChosenMonth={setChosenMonth}
        />
        <FormInput
          name={`duties${number}`}
          values={values}
          handleChange={handleChange}
          label="Обязанности"
          extraInputClass="responsibilities"
          disabled={!hasExperience}
        />
      </div>
      <div className="job__buttons-container">
        <button
          className="job__delete-button link"
          type="button"
          onClick={handleDelete}
        >
          <img src={TrashIcon} alt="trash-icon" />
          Удалить
        </button>
        <button
          className="job__add-button link"
          type="button"
          onClick={addExperience}
        >
          <img src={PlusIcon} alt="plus-icon" />
          Добавить
        </button>
      </div>
    </>
  )
}

Job.propTypes = {
  hasExperience: PropTypes.bool.isRequired,
  addExperience: PropTypes.func.isRequired,
  deleteExperience: PropTypes.func.isRequired,
  i: PropTypes.string.isRequired,
  values: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  handleChange: PropTypes.func,
  handleCheckboxChange: PropTypes.func,
  checkboxValues: PropTypes.shape({
    checkbox: PropTypes.bool,
  }),
  isTillPresent: PropTypes.bool.isRequired,
  setIsTillPresent: PropTypes.func,
  number: PropTypes.number,
}

Job.defaultProps = {
  values: {},
  handleChange: () => {},
  checkboxValues: {},
  setIsTillPresent: () => {},
  handleCheckboxChange: () => {},
  number: undefined,
}

export default Job
