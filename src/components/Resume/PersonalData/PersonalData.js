/* eslint-disable react/prop-types */
import './PersonalData.scss'
import React from 'react'
// import { v4 as uuidv4 } from 'uuid'
import ResumeTitle from '../ResumeComponents/ResumeTitle/ResumeTitle'
import DoubleInput from '../ResumeComponents/DoubleInput/DoubleInput'
import {
  CAREER_OBJECTIVE_TIP,
  ACTUAL_STATUS_TIP,
  EMAIL_TIP,
  OTHER__SITE_LINK_TIP,
} from '../../../constants/tips'
import {
  ACTUAL_STATUS_OPTIONS,
  LEVEL_OPTIONS,
  LANGUAGE_OPTIONS,
  LANGUAGE_LEVEL_OPTIONS,
} from '../../../constants/input-options'
import FormInput from '../ResumeComponents/FormInput/FormInput'
import LanguageInput from '../ResumeComponents/LanguageInput/LanguageInput'

const PersonalData = ({
  values,
  handleChange,
  setValues,
  addLanguage,
  setLanguagesAfterDeleting,
  setLanguagesChanges,
  errors,
  handleChangeWithValidation,
}) => {
  const deleteLanguage = i => {
    const languageToBeRemoved = values.languages.find(item => item.id === i)
    const remainingLanguages = values.languages.filter(
      item => item.id !== languageToBeRemoved.id
    )
    setLanguagesAfterDeleting(remainingLanguages)
    return remainingLanguages
  }

  const handleLanguageChange = ({ i, name, value }) => {
    const languageToBeChanged = values.languages.find(item => item.id === i)
    const indexToReplace = values.languages.findIndex(item => item.id === i)
    const copy = { ...languageToBeChanged }
    if (name.slice(0, 14) === 'language_level') {
      copy.level = value
    } else {
      copy.language = value
    }
    const newLanguages = [...values.languages]
    newLanguages[indexToReplace] = copy
    setLanguagesChanges(newLanguages)
  }

  return (
    <section className="personal-data">
      <div className="personal-data__container">
        <ResumeTitle title="Персональные данные" />
        <div className="personal-data__form">
          <DoubleInput
            values={values}
            handleChange={handleChange}
            setValues={setValues}
            name={['name']}
            firstLabel="Имя"
            ordinaryInputFirst
          />
          <DoubleInput
            values={values}
            handleChange={handleChange}
            setValues={setValues}
            name={['surname']}
            firstLabel="Фамилия"
            ordinaryInputFirst
          />
          <DoubleInput
            handleChange={handleChangeWithValidation}
            values={values}
            setValues={setValues}
            name={['birthday']}
            firstLabel="Дата рождения"
            placeholder="ДД.ММ.ГГГГ"
            ordinaryInputFirst
            dataMask="date"
            errors={errors}
          />
          <DoubleInput
            setValues={setValues}
            handleChange={handleChange}
            values={values}
            name={['city', 'work_status']}
            firstLabel="Город проживания"
            secondLabel="Актуальный статус"
            doubleInput
            ordinaryInputFirst
            selectedInputSecond
            optionsInputSecond={ACTUAL_STATUS_OPTIONS}
            tipSecond
            tipTextSecond={ACTUAL_STATUS_TIP}
          />
          <DoubleInput
            setValues={setValues}
            handleChange={handleChange}
            values={values}
            name={['desired_position', 'level_knowledge']}
            firstLabel="Желаемая должность"
            secondLabel="Уровень"
            doubleInput
            ordinaryInputFirst
            selectedInputSecond
            optionsInputSecond={LEVEL_OPTIONS}
            tipFirst
            tipTextFirst={CAREER_OBJECTIVE_TIP}
          />
        </div>
        <ResumeTitle title="Контакты" />
        <div className="personal-data__form">
          <FormInput
            values={values}
            handleChange={handleChangeWithValidation}
            setValues={setValues}
            name={['email']}
            label="Почта"
            tip
            tipText={EMAIL_TIP}
            errors={errors}
          />
          <DoubleInput
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            name={['phone', 'behance']}
            firstLabel="Телефон"
            secondLabel="Ссылка на Behance"
            placeholder="+7"
            doubleInput
            ordinaryInputFirst
            ordinaryInputSecond
            dataMask="phone"
          />
          <DoubleInput
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            name={['telegram', 'githab']}
            firstLabel="Телеграм"
            secondLabel="Ссылка на GitHub"
            doubleInput
            placeholder="t.me/name"
            dataMask="tgLink"
            ordinaryInputFirst
            // maskLinkInputFirst
            ordinaryInputSecond
          />
          <DoubleInput
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            name={['website_link', 'video_link']}
            firstLabel="Ссылка на другой сайт"
            secondLabel="Ссылка на видео о себе"
            doubleInput
            ordinaryInputFirst
            ordinaryInputSecond
            tipFirst
            tipTextFirst={OTHER__SITE_LINK_TIP}
          />
        </div>
        <ResumeTitle title="Владение языками" />
        {values.languages.map(lang => (
          <div className="personal-data__language-form" key={lang.id}>
            <LanguageInput
              values={lang}
              handleLanguageChange={handleLanguageChange}
              setValues={setValues}
              firstLabel="Язык"
              secondLabel="Уровень"
              optionsInputFirst={LANGUAGE_OPTIONS}
              optionsInputSecond={LANGUAGE_LEVEL_OPTIONS}
              key={lang.id}
              i={lang.id}
              addLanguage={addLanguage}
              deleteLanguage={deleteLanguage}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default PersonalData
