import './Skills.scss'
import React from 'react'
import skillsSelectedIcon from '../../../img/skills-confirm-icon.svg'
import skillsRollIcon from '../../../img/skills-roll-icon.svg'

function Skills() {
  const testArray = [
    'Дизайн интерфейсов',
    'CJM',
    'Прототипирование',
    'Дизайн интерфейсов',
    'Прототипирование',
    'JTBD',
    'web design',
    'CJM',
    'JTBD',
    'web design',
  ]

  const [isOpenMenu, setIsOpenMenu] = React.useState(false)
  console.log('🚀 ~ file: Skills.js:8 ~ Skills ~ setIsOpenMenu:', setIsOpenMenu)

  function handleOpenMenu() {
    setIsOpenMenu(true)
  }
  function handleCloseMenu() {
    setIsOpenMenu(false)
  }

  return (
    <section className="skills">
      <h1 className="skills__title">Навыки</h1>
      <h2 className="skills__subtitle">Выберите из списка</h2>
      <div className="skills__container">
        <div
          className={`${
            isOpenMenu
              ? 'skills__field'
              : 'skills__field skills__field_disabled-border-bottom'
          }`}
        >
          {isOpenMenu ? (
            <button
              className="skills__field-selected-btn "
              type="submit"
              label="button"
              onClick={() => {
                console.log(isOpenMenu)
                handleCloseMenu()
              }}
            >
              <img
                src={skillsSelectedIcon}
                alt="skills selectied icon"
                className="skills__field-selected-img"
              />
            </button>
          ) : (
            <button
              className="skills__field-selected-btn skills__field-selected-btn_disabled"
              type="submit"
              label="button"
              onClick={() => {
                console.log(isOpenMenu)
                handleOpenMenu()
              }}
            >
              <img
                src={skillsRollIcon}
                alt="skills selectied icon"
                className="skills__field-selected-img"
              />
            </button>
          )}
        </div>
        <ul
          className={`${
            isOpenMenu ? 'skills__list skills__list_visible' : 'skills__list'
          }`}
        >
          {testArray.map(item => (
            <li className="skills__item">
              <button
                className="skills__item-button"
                type="submit"
                label="button"
                onClick={() => {}}
              >
                {`${item}`}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
