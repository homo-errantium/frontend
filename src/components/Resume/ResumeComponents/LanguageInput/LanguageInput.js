/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import './LanguageInput.scss'

const LanguageInput = ({
  firstLabel,
  secondLabel,
  optionsInputFirst,
  optionsInputSecond,
  i,
  addLanguage,
  deleteLanguage,
  values,
  handleLanguageChange,
  handleLanguageLevelChange,
}) => {
  const handleDelete = () => deleteLanguage(i)

  return (
    <div className="language-input" id={i} key={i}>
      <div className="language-input__left-box">
        <div className="language-input__label-container">
          <label
            className="language-input__label"
            htmlFor="selected-lang-input-first"
          >
            {firstLabel}
          </label>
        </div>
        <div className="language-input__select-wrapper">
          <select
            name={`language_${i}`}
            onChange={handleLanguageChange}
            value={values.language}
            id={`language_${i}`}
            className="language-input__field"
          >
            <option
              value=""
              className="double-input__option"
              disabled
              selected
              hidden
              aria-label="Выберите язык"
            />
            {optionsInputFirst.map(value => (
              <option
                value={value}
                className="language-input__field"
                key={value}
              >
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="language-input__right-box">
        <div className="double-input__label-container">
          <label
            className="double-input__label"
            htmlFor="selected-input-second"
          >
            {secondLabel}
          </label>
        </div>
        <div className="language-input__select-wrapper">
          <select
            name={`language_level_${i}`}
            onChange={handleLanguageLevelChange}
            value={values.level}
            id={`language_level_${i}`}
            className="language-input__field"
          >
            <option
              value=""
              className="double-input__option"
              disabled
              selected
              hidden
              aria-label="Выберите уровень знания языка"
            />
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
      </div>
      <div className="language-input__button-container">
        <button
          className="language-input__button-delete link"
          type="button"
          aria-label="Удалить"
          onClick={handleDelete}
        />
        <button
          className="language-input__button-add link"
          type="button"
          aria-label="Добавить"
          onClick={addLanguage}
        />
      </div>
    </div>
  )
}
LanguageInput.propTypes = {
  firstLabel: PropTypes.string,
  secondLabel: PropTypes.string,
  optionsInputFirst: PropTypes.arrayOf(PropTypes.string),
  optionsInputSecond: PropTypes.arrayOf(PropTypes.string),
  i: PropTypes.string.isRequired,
  addLanguage: PropTypes.func,
  deleteLanguage: PropTypes.func,
  handleLanguageChange: PropTypes.func.isRequired,
  handleLanguageLevelChange: PropTypes.func.isRequired,
}

LanguageInput.defaultProps = {
  firstLabel: '',
  secondLabel: '',
  optionsInputFirst: [],
  optionsInputSecond: [],
  addLanguage: () => {},
  deleteLanguage: () => {},
}

export default LanguageInput
