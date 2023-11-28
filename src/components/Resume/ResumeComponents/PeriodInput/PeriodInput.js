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
  checkboxValues,
  handleCheckboxChange,
}) => {
  const [isTillPresent, setIsTillPresent] = useState(false)
  const [disabledMonthChoice, setDisabledMonthChoice] = useState(false)

  const handleCheckboxToggle = () => {
    setIsTillPresent(!isTillPresent)
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
          {month && <MonthPicker disabled={disabled} />}
          <input
            type="text"
            placeholder="Год"
            id="year"
            className={classNames(
              'period-input__field form-input__field',
              !month && 'period-input__field_year-only'
            )}
            disabled={disabled}
          />
        </div>
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
            <MonthPicker disabled={disabledMonthChoice || isTillPresent} />
          )}
          <input
            type="text"
            placeholder="Год"
            id="year"
            className={classNames(
              'period-input__field form-input__field',
              !month && 'period-input__field_year-only'
            )}
            disabled={disabled || isTillPresent}
          />
        </div>

        {tillPresent && (
          <div className="period-input__checkbox-container">
            <Checkbox
              name="work_period"
              checkboxValues={checkboxValues}
              handleCheckboxChange={handleCheckboxChange}
              checkboxText="Настоящее время"
              checkboxId={`period-checkbox${i}`}
              onClick={handleCheckboxToggle}
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
}

PeriodInput.defaultProps = {
  month: false,
  tip: false,
  tipText: '',
  disabled: false,
  tillPresent: false,
  handleCheckboxChange: () => {},
  checkboxValues: {},
}

export default PeriodInput
