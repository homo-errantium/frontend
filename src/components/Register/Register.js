import React from 'react'
import PropTypes from 'prop-types'
import './Register.scss'
import FormTitle from './FormTitle/FormTitle'
import RegistrationForm from './RegistrationForm/RegistrationForm'
import FormRedirection from './FormRedirection/FormRedirection'

const Register = ({ onRegister }) => (
	<section className="register">
		<FormTitle greeting="Добро пожаловать!" />
		<RegistrationForm button="Зарегистрироваться" onSubmit={onRegister} />
		<FormRedirection
			text="Уже зарегистрированы?"
			button="Войти"
			path="/signin"
		/>
	</section>
)

Register.propTypes = {
	onRegister: PropTypes.func.isRequired,
}

export default Register
