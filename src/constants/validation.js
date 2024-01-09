import { NAME_REGEX } from './regex'

export const validationName = (
  value,
  setIsValid,
  evt,
  setErrors,
  errors,
  currentUser
) => {
  if (!NAME_REGEX.test(value)) {
    setErrors({
      ...errors,
      name: 'Имя может быть введено только кириллицей. Допускаются пробелы и дефисы',
    })
    setIsValid({ name: false })
  } else if (evt.target.value.length > 50 || evt.target.value.length < 2) {
    setErrors({
      ...errors,
      name: 'Имя должно быть длиной от 2 до 50 символов',
    })
    setIsValid({ name: false })
  } else if (evt.target.value.length === 0) {
    setErrors({
      ...errors,
      name: 'Это поле должно быть заполнено',
    })
    setIsValid({ name: false })
  } else if (value === currentUser.name) {
    setErrors({
      ...errors,
      name: 'Введённые в поле данные совпадают с сохранёнными',
    })
  } else {
    setIsValid({ name: true })
    setErrors({ ...errors, name: '' })
  }
}
