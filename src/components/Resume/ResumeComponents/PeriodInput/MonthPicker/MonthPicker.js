import React from 'react'
import './MonthPicker.scss'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { months } from '../../../../../constants/months'

const MonthPicker = ({ disabled, setValues, values, name, id, allValues }) => {
  const chooseMonth = month => {
    if (id === '0') {
      setValues(prevValues => ({ ...prevValues, [name]: month.id }))
    } else {
      const updateMonth = allValues.jobs.map(job => {
        if (job.id === id) {
          return { ...job, [name]: month.id, id }
        }
        return job
      })
      setValues(prevValues => ({ ...prevValues, jobs: updateMonth }))
    }
  }

  return (
    <div className="month__container">
      <input
        name={name}
        type="text"
        placeholder="Месяц"
        id={id}
        className={classNames(
          'month__input',
          disabled && 'month__input_disabled'
        )}
        value={values[name] ? months.find(m => values[name] === m.id).long : ''}
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
                    values[name] === month.id && 'month__button_active'
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
  setValues: PropTypes.func,
  values: PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      ),
    ]),
  }),
  name: PropTypes.string,
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
  id: PropTypes.string.isRequired,
}

MonthPicker.defaultProps = {
  disabled: false,
  setValues: () => {},
  values: {},
  name: '',
  allValues: {},
}

export default MonthPicker
