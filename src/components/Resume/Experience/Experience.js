import '../PersonalData/PersonalData.scss'
import React from 'react'
import './Experience.scss'
import ResumeTitle from '../ResumeComponents/ResumeTitle/ResumeTitle'
import AddButton from '../ResumeComponents/AddButton/AddButton'
import FormInput from '../ResumeComponents/FormInput/FormInput'
import { JOB_TIP } from '../../../constants/tips'

function Experience() {
  return (
    <section className="personal-data">
      <ResumeTitle title="Опыт работы" checkbox checkboxText="Нет опыта" />
      <div className="experience__form-container">
        <FormInput label="Название компании" />
        <FormInput label="Сайт компании" />
        <div className="experience__form-container-second-level">
          <FormInput label="Название компании" />
          <FormInput label="Сайт компании" />
        </div>

        <FormInput label="Должность" tip tipText={JOB_TIP} />
        <FormInput label="Обязанности" extraInputClass="responsibilities" />
        <AddButton />
      </div>
    </section>
  )
}

export default Experience
