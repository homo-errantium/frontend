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
  // const [query, setQuery] = useState('')
  useEffect(() => {
    const inputElementPhone = document.querySelector('[mask="phone"]')
    const maskOptionsPhone = {
      // создаем объект параметров
      mask: '+{7}(000)000-00-00', // задаем единственный параметр mask
    }
    IMask(inputElementPhone, maskOptionsPhone)
    const inputElementDate = document.querySelector('[mask="date"]')

    const maskOptionsDate = {
      // создаем объект параметров
      mask: Date,
      min: new Date(1900, 0, 1), // задаем единственный параметр mask
    }
    IMask(inputElementDate, maskOptionsDate)
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
            //   id="ordinary-input-first"
            placeholder={placeholder}
            mask={dataMask}
            type="text"
            // value={query || ''}
            // onClick={handleInput}
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
                //   id="ordinary-input-second"
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
