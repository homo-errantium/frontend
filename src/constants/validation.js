import { NAME_REGEX, BIRTHDAY_REGEX, PASSWORD_REGEX } from './regex'

export const validationName = (
  value,
  isValidFields,
  setIsValidFields,
  setErrors,
  errors
) => {
  if (!NAME_REGEX.test(value)) {
    setErrors({
      ...errors,
      name: 'Имя может быть введено только кириллицей. Допускаются пробелы и дефисы',
    })
    setIsValidFields({ ...isValidFields, name: false })
  } else if (value.length > 50 || value.length < 2) {
    setErrors({
      ...errors,
      name: 'Имя должно быть длиной от 2 до 50 символов',
    })
    setIsValidFields({ ...isValidFields, name: false })
  } else {
    setIsValidFields({ ...isValidFields, name: true })
    setErrors({ ...errors, name: '' })
  }
}

export const validationSurname = (
  value,
  isValidFields,
  setIsValidFields,
  setErrors,
  errors
) => {
  if (!NAME_REGEX.test(value)) {
    setErrors({
      ...errors,
      surname:
        'Фамилия может быть введена только кириллицей. Допускаются пробелы и дефисы',
    })
    setIsValidFields({ ...isValidFields, surname: false })
  } else if (value.length > 50 || value.length < 2) {
    setErrors({
      ...errors,
      surname: 'Фамилия должна быть длиной от 1 до 50 символов',
    })
    setIsValidFields({ ...isValidFields, surname: false })
  } else {
    setIsValidFields({ ...isValidFields, surname: true })
    setErrors({ ...errors, surname: '' })
  }
}

export const validationBirthday = (
  value,
  isValidFields,
  setIsValidFields,
  setErrors,
  errors
) => {
  const currentYear = new Date().getFullYear()
  if (!BIRTHDAY_REGEX.test(value)) {
    setErrors({
      ...errors,
      birthday: 'Дата рождения введена некорректно',
    })
    setIsValidFields({ ...isValidFields, birthday: false })
  } else if (value.slice(6, 10) > currentYear) {
    setErrors({
      ...errors,
      birthday: 'Путешествуете во времени?',
    })
    setIsValidFields({ ...isValidFields, birthday: false })
  } else {
    setIsValidFields({ ...isValidFields, birthday: true })
    setErrors({ ...errors, birthday: '' })
  }
}

export const validationCity = (
  value,
  isValidFields,
  setIsValidFields,
  setErrors,
  errors
) => {
  if (!NAME_REGEX.test(value)) {
    setErrors({
      ...errors,
      city: 'Название города может быть введено только кириллицей. Допускаются пробелы и дефисы',
    })
    setIsValidFields({ ...isValidFields, city: false })
  } else if (value.length > 50 || value.length < 2) {
    setErrors({
      ...errors,
      city: 'Название города должно быть длиной от 2 до 50 символов',
    })
    setIsValidFields({ ...isValidFields, city: false })
  } else {
    setIsValidFields({ ...isValidFields, city: true })
    setErrors({ ...errors, city: '' })
  }
}

export const validationPassword = (
  name,
  evt,
  value,
  setIsValidPassword,
  setPasswordErrors,
  passwordErrors,
  currentUser,
  setIsValidPasswords,
  isValidPasswords,
  currentPassword
) => {
  // if (name === 'previousPassword') {
  //   // setIsValidPassword(evt.target.closest('form').checkValidity())
  //   if (value.length < 2) {
  //     setIsValidPassword({ ...isValidPassword, [name]: false })
  //     setPasswordErrors({
  //       ...passwordErrors,
  //       previousPassword: 'Пароль должен иметь не менее 2 символов',
  //     })
  //   } else if (currentPassword !== value) {
  //     setPasswordErrors({
  //       ...passwordErrors,
  //       previousPassword: 'Не верно введён старый пароль',
  //     })
  //   }
  // } else {
  //   setPasswordErrors({
  //     ...passwordErrors,
  //     previousPassword: '',
  //   })
  //   setIsValidPassword({ ...isValidPassword, previousPassword: true })
  // }

  if (name === 'newPassword') {
    setIsValidPassword(evt.target.closest('form').checkValidity())
    if (value.length < 2) {
      setIsValidPasswords({ ...isValidPasswords, newPassword: false })
      setPasswordErrors({
        ...passwordErrors,
        newPassword: 'Пароль должен иметь не менее 2 символов',
      })
    } else if (!PASSWORD_REGEX.test(value)) {
      setIsValidPasswords({ ...isValidPasswords, newPassword: false })
      setPasswordErrors({
        ...passwordErrors,
        newPassword: evt.target.validationMessage,
      })
    }
  } else {
    setIsValidPasswords({ ...isValidPasswords, newPassword: true })
    setPasswordErrors({
      ...passwordErrors,
      newPassword: '',
    })
    setIsValidPassword(true)
  }

  // if (name === 'passwordConfirmation') {
  //   // setIsValidPassword(evt.target.closest('form').checkValidity())
  //   if (value.length < 1) {
  //     setIsValidPassword({ ...isValidPassword, passwordConfirmation: false })
  //     setPasswordErrors({
  //       ...passwordErrors,
  //       passwordConfirmation: 'Необходимо повторно ввести пароль',
  //     })
  //   } else if (value !== passwordErrors.newPassword) {
  //     setIsValidPassword({ ...isValidPassword, passwordConfirmation: false })
  //     setPasswordErrors({
  //       ...passwordErrors,
  //       passwordConfirmation: 'Пароли не совпадают',
  //     })
  //   } else {
  //     setPasswordErrors({
  //       ...passwordErrors,
  //       passwordConfirmation: '',
  //     })
  //     setIsValidPassword({ ...isValidPassword, passwordConfirmation: true })
  //   }
  // }
  if (currentUser.newPassword !== currentUser.passwordConfirmation) {
    setIsValidPasswords({ ...isValidPasswords, passwordConfirmation: false })
    setPasswordErrors({
      ...passwordErrors,
      passwordConfirmation: 'Пароли не совпадают',
    })
  } else {
    setIsValidPasswords({ ...isValidPasswords, passwordConfirmation: true })
    setPasswordErrors({
      ...passwordErrors,
      passwordConfirmation: '',
    })
  }

  if (currentPassword !== value) {
    setIsValidPasswords({ ...isValidPasswords, previousPassword: false })
    setPasswordErrors({
      ...passwordErrors,
      previousPassword: 'Старый пароль указан неверно',
    })
  } else {
    setPasswordErrors({
      ...passwordErrors,
      previousPassword: '',
    })
    setIsValidPasswords({ ...isValidPasswords, previousPassword: true })
  }
}
