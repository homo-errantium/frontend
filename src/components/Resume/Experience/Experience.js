import '../PersonalData/PersonalData.scss'
import React from 'react'
import './Experience.scss'
import ResumeTitle from '../ResumeComponents/ResumeTitle/ResumeTitle'
import AddButton from '../ResumeComponents/AddButton/AddButton'
import FormInput from '../ResumeComponents/FormInput/FormInput'
import PeriodInput from '../ResumeComponents/PeriodInput/PeriodInput'
import { JOB_TIP } from '../../../constants/tips'

function Experience() {
  return (
    <section className="personal-data">
      <ResumeTitle
        title="Опыт работы"
        checkbox
        checkboxText="Нет опыта"
        checkboxId="title-checkbox"
        onClick={handleTitleCheckboxClick}
      />
      <div className="experience__form-container">
        <FormInput label="Название компании" disabled={!hasExperience} />
        <FormInput label="Сайт компании" disabled={!hasExperience} />
        <FormInput
          label="Должность"
          tip
          tipText={JOB_TIP}
          disabled={!hasExperience}
        />
        <PeriodInput
          labelOne="Дата начала работы"
          labelTwo="Дата окончания работы"
          month
          disabled={!hasExperience}
        />
        <FormInput
          label="Обязанности"
          extraInputClass="responsibilities"
          disabled={!hasExperience}
        />
        <AddButton disabled={!hasExperience} />
      </div>
    </section>
  )
}

export default Experience
