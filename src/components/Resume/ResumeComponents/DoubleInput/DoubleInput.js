/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
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
  maskLinkInputFirst,
  selectedInputSecond,
  ordinaryInputSecond,
  optionsInputFirst,
  optionsInputSecond,
  values,
  handleChange,
  name,
}) => {
  const [username, setUsername] = useState('')
  // function deleteNonLatin(text) {
  //   return text.replace(/(?!https://t.me//)[^A-Za-z]/ig, '');
  // }
  // function deleteNonLatin (text) {
  //   return text.replace(/[^A-Za-z]|https://t.me//ig, '');
  //   }

  const handleChangeUsername = event => {
    console.log(event.target.value.split('https://t.me/'))
    if (event.target.value === '') {
      setUsername('')
    } else if (event.target.value === 'https://t.me/') {
      setUsername('')
    } else if (event.target.value.includes('https://t.me/')) {
      setUsername(event.target.value)
    } else {
      setUsername(`https://t.me/${event.target.value}`)
    }
    // setUsername(event.target.value.slice(13))
  }

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
    // maskInput('tgLink', maskOptionsLink)
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
              id={values[name[1]]}
              name={name[1]}
              onChange={handleChange}
              value={values[name[1]]}
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
            name={name[0]}
            onChange={handleChange}
            // value={username}
            value={values[name[0]]}
            className="double-input__field"
            disabled={disabled}
            placeholder={placeholder}
            mask={dataMask}
            type="text"
          />
        )}
        {maskLinkInputFirst && (
          <input
            name={name[0]}
            // onChange={handleChange}
            onChange={handleChangeUsername}
            // value={values[name[7]]}
            value={username}
            className="double-input__field"
            disabled={disabled}
            placeholder={placeholder}
            // mask={dataMask}
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
                  name={name[1]}
                  onChange={handleChange}
                  value={values[name[1]]}
                  id={values[name[1]]}
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
                name={name[1]}
                onChange={handleChange}
                value={values[name[1]]}
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
  maskLinkInputFirst: PropTypes.bool,
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
  maskLinkInputFirst: false,
  selectedInputSecond: false,
  ordinaryInputSecond: false,
  optionsInputFirst: [],
  optionsInputSecond: [],
  dataMask: '',
}

export default DoubleInput
