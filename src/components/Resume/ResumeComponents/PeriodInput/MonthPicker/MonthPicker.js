/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './MonthPicker.scss'
// import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { months } from '../../../../../constants/months'

const MonthPicker = ({ disabled, setChosenMonth, chosenMonth, name }) => {
  // const [chosenMonth, setChosenMonth] = useState('')

  const chooseMonth = month => {
    setChosenMonth({ ...chosenMonth, [name]: month.id })
  }

  return (
    <div className="month__container">
      <input
        name={name}
        type="text"
        placeholder="Месяц"
        id={name}
        className={classNames(
          'month__input',
          disabled && 'month__input_disabled'
        )}
        value={
          chosenMonth[name]
            ? months.find(m => chosenMonth[name] === m.id).long
            : ''
        }
        readOnly
        disabled={disabled}
      />
      {!disabled && (
        <div className="month__container-list">
          <div className="month__grid-list">
            {months.map(month => {
              const chooseThisMonth = () => {
                chooseMonth(month)
              }
              return (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                <span
                  key={month.id}
                  className={classNames(
                    'month__button link',
                    chosenMonth[name] === month.id && 'month__button_active'
                  )}
                  onClick={chooseThisMonth}
                >
                  {month.short}
                </span>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

MonthPicker.propTypes = {
  disabled: PropTypes.bool,
}

MonthPicker.defaultProps = {
  disabled: false,
}

export default MonthPicker
