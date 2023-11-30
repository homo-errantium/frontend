import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import IMask from 'imask'
import './DoubleInput.scss'
import Tip from '../Tip/Tip'

const DoubleInput = ({
  firstLabel,
  tipFirst,
  tipTextFirst,
  tipSecond,
  tipTextSecond,
  dataMask,
  disabled,
  doubleInput,
  secondLabel,
  placeholder,
  selectedInputFirst,
  ordinaryInputFirst,
  selectedInputSecond,
  ordinaryInputSecond,
  optionsInputFirst,
  optionsInputSecond,
}) => {
  const maskOptionsPhone = {
    mask: '+{7}(000)000-00-00',
  }
  const maskOptionsDate = {
    mask: Date,
    min: new Date(1900, 0, 1),
  }
  const maskInput = (dataValue, options) => {
    const inputElements = document.querySelectorAll(`[mask="${dataValue}"]`) // ищем поля ввода по селектору с переданным значением data-атрибута
    if (!inputElements) return // если таких полей ввода нет, прерываем функцию
    inputElements.forEach(el => {
      // для каждого из полей ввода
      IMask(el, options) // инициализируем плагин imask для необходимых полей ввода с переданными параметрами маски
    })
  }
  useEffect(() => {
    maskInput('phone', maskOptionsPhone)
    maskInput('date', maskOptionsDate)
  })

  return (
    <div className="double-input">
      <div className="double-input__left-box">
        <div className="double-input__label-container">
          <label className="double-input__label" htmlFor="selected-input-first">
            {firstLabel}
          </label>
          {tipFirst && <Tip text={tipTextFirst} />}
        </div>
        {selectedInputFirst && (
          <div className="double-input__select-wrapper">
            <select
              id="selected-input-first"
              className="double-input__field double-input__field_selected"
            >
              {optionsInputFirst.map(value => (
                <option
                  value={value}
                  className="double-input__field"
                  key={value}
                >
                  {value}
                </option>
              ))}
            </select>
          </div>
        )}
        {ordinaryInputFirst && (
          <input
            className="double-input__field"
            disabled={disabled}
            placeholder={placeholder}
            mask={dataMask}
            type="text"
          />
        )}
      </div>
      <div className="double-input__right-box">
        {doubleInput && (
          <>
            <div className="double-input__label-container">
              <label
                className="double-input__label"
                htmlFor="selected-input-second"
              >
                {secondLabel}
              </label>
              {tipSecond && <Tip text={tipTextSecond} />}
            </div>
            {selectedInputSecond && (
              <div className="double-input__select-wrapper">
                <select
                  id="selected-input-second"
                  className="double-input__field double-input__field_selected"
                >
                  {optionsInputSecond.map(value => (
                    <option
                      value={value}
                      className="double-input__option"
                      key={value}
                    >
                      {value}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {ordinaryInputSecond && (
              <input
                className="double-input__field double-input__field_short"
                disabled={disabled}
              />
            )}
          </>
        )}
      </div>
    </div>
  )
}

DoubleInput.propTypes = {
  firstLabel: PropTypes.string.isRequired,
  secondLabel: PropTypes.string,
  tipFirst: PropTypes.bool,
  tipTextFirst: PropTypes.node,
  tipSecond: PropTypes.bool,
  tipTextSecond: PropTypes.node,
  disabled: PropTypes.bool,
  doubleInput: PropTypes.bool,
  placeholder: PropTypes.node,
  selectedInputFirst: PropTypes.bool,
  ordinaryInputFirst: PropTypes.bool,
  selectedInputSecond: PropTypes.bool,
  ordinaryInputSecond: PropTypes.bool,
  optionsInputFirst: PropTypes.arrayOf(PropTypes.string),
  optionsInputSecond: PropTypes.arrayOf(PropTypes.string),
  dataMask: PropTypes.string,
}

DoubleInput.defaultProps = {
  tipFirst: false,
  tipTextFirst: '',
  tipSecond: false,
  tipTextSecond: '',
  disabled: false,
  doubleInput: false,
  placeholder: '',
  secondLabel: '',
  selectedInputFirst: false,
  ordinaryInputFirst: false,
  selectedInputSecond: false,
  ordinaryInputSecond: false,
  optionsInputFirst: [],
  optionsInputSecond: [],
  dataMask: '',
}

export default DoubleInput
