import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './PeriodInput.scss'
import classNames from 'classnames'
import Tip from '../Tip/Tip'
import Checkbox from '../Checkbox/Checkbox'
import MonthPicker from './MonthPicker/MonthPicker'

const PeriodInput = ({
  labelOne,
  labelTwo,
  month,
  tip,
  tipText,
  disabled,
  i,
  tillPresent,
  namePeriod,
  setValues,
  monthPeriod,
  year,
  values,
  handleCheckboxChange,
  checkboxValues,
  handleChange,
  setAllTillPresent,
  allTillPresent,
  setCheckboxValues,
  errors,
  allValues,
}) => {
  const [disabledMonthChoice, setDisabledMonthChoice] = useState(false)
  const [isTillPresent, setIsTillPresent] = React.useState(
    allTillPresent[i] || false
  )
  useEffect(() => {
    if (isTillPresent) {
      if (i === '0') {
        setValues(prevValue => ({
          ...prevValue,
          [monthPeriod[1]]: '',
          [year[1]]: '',
        }))
      } else {
        const monthClear = allValues.jobs.map(job => {
          if (i === job.id) {
            return { ...job, [monthPeriod[1]]: '', [year[1]]: '' }
          }
          return job
        })
        setValues(prevValue => ({ ...prevValue, jobs: monthClear }))
      }
    }
  }, [isTillPresent])

  useEffect(() => {
    if (disabled) {
      setValues({
        ...values,
        [monthPeriod[1]]: '',
        [monthPeriod[0]]: '',
        [year[0]]: '',
        [year[1]]: '',
      })
      setIsTillPresent(false)
    }
  }, [disabled])

  const handleCheckboxToggle = () => {
    setIsTillPresent(!isTillPresent)
    setAllTillPresent(prevValue => ({ ...prevValue, [i]: !isTillPresent }))
  }

  useEffect(() => {
    setDisabledMonthChoice(disabled)
  }, [disabled])

  return (
    <div
      className={classNames(
        'period-input__container',
        !month && 'period-input__container_year-only'
      )}
    >
      <div className="form-input">
        <div className="form-input__label-container">
          <label className="form-input__label" htmlFor="form-input">
            {labelOne}
          </label>
          {tip && <Tip text={tipText} />}
        </div>
        <div
          className={classNames(
            'period-input__inputs-container',
            !month && 'period-input__inputs-container_year-only'
          )}
        >
          {month && (
            <MonthPicker
              name={monthPeriod[0]}
              values={values}
              setValues={setValues}
              disabled={disabled}
              id={i}
              allValues={allValues}
            />
          )}
          <input
            name={year[0]}
            value={values[year[0]] || ''}
            onChange={handleChange}
            type="text"
            placeholder="Год"
            id={i}
            className={classNames(
              'period-input__field form-input__field',
              !month && 'period-input__field_year-only',
              errors[year[0]] && 'form-input__field_error'
            )}
            disabled={disabled}
          />
        </div>
        {errors && (
          <span className="form-input__input-error">{errors[year[0]]}</span>
        )}
      </div>

      <div className="form-input">
        <div className="form-input__label-container">
          <label className="form-input__label" htmlFor="form-input">
            {labelTwo}
          </label>
          {tip && <Tip text={tipText} />}
        </div>
        <div
          className={classNames(
            'period-input__inputs-container',
            !month && 'period-input__inputs-container_year-only'
          )}
        >
          {month && (
            <MonthPicker
              name={monthPeriod[1]}
              values={values}
              setValues={setValues}
              disabled={disabledMonthChoice || isTillPresent}
              id={i}
              allValues={allValues}
            />
          )}
          <input
            name={year[1]}
            value={values[year[1]] || ''}
            onChange={handleChange}
            type="text"
            placeholder="Год"
            id={i}
            className={classNames(
              'period-input__field form-input__field',
              !month && 'period-input__field_year-only',
              errors[year[1]] && 'form-input__field_error'
            )}
            disabled={disabled || isTillPresent}
          />
        </div>
        {errors && (
          <span className="form-input__input-error">{errors[year[1]]}</span>
        )}
        {tillPresent && (
          <div className="period-input__checkbox-container">
            <Checkbox
              disabled={disabled}
              name={namePeriod}
              checkboxValues={checkboxValues}
              handleCheckboxChange={handleCheckboxChange}
              checkboxText="Настоящее время"
              checkboxId={`period-checkbox${i}`}
              onClick={handleCheckboxToggle}
              setValues={setValues}
              setCheckboxValues={setCheckboxValues}
            />
          </div>
        )}
      </div>
    </div>
  )
}

PeriodInput.propTypes = {
  labelOne: PropTypes.string.isRequired,
  labelTwo: PropTypes.string.isRequired,
  month: PropTypes.bool,
  tip: PropTypes.bool,
  tipText: PropTypes.node,
  disabled: PropTypes.bool,
  i: PropTypes.string.isRequired,
  tillPresent: PropTypes.bool,
  handleCheckboxChange: PropTypes.func,
  checkboxValues: PropTypes.shape({
    checkbox: PropTypes.bool,
  }),
  namePeriod: PropTypes.string,
  setValues: PropTypes.func,
  monthPeriod: PropTypes.arrayOf(PropTypes.string),
  year: PropTypes.arrayOf(PropTypes.string),
  values: PropTypes.shape({
    languages: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.string, PropTypes.number)
    ),
    jobs: PropTypes.arrayOf(
      PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      )
    ),
  }),
  handleChange: PropTypes.func,
  setAllTillPresent: PropTypes.func,
  allTillPresent: PropTypes.shape({
    value: PropTypes.bool,
  }),
  setCheckboxValues: PropTypes.func,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  allValues: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.objectOf(
            PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          ),
        ])
      ),
    ])
  ),
}

PeriodInput.defaultProps = {
  month: false,
  tip: false,
  tipText: '',
  disabled: false,
  tillPresent: false,
  handleCheckboxChange: () => {},
  checkboxValues: {},
  namePeriod: undefined,
  setValues: () => {},
  monthPeriod: [],
  year: [],
  values: {},
  handleChange: () => {},
  setAllTillPresent: () => {},
  allTillPresent: {},
  setCheckboxValues: () => {},
  allValues: {},
}

export default PeriodInput
