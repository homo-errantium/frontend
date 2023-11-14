import React from 'react'
import PropTypes from 'prop-types'
import './Register.scss'
import FormTitle from './FormTitle/FormTitle'
import RegistrationForm from './RegistrationForm/RegistrationForm'
import FormRedirection from './FormRedirection/FormRedirection'

const Register = ({ onRegister }) => (
	<section className="register">
		<div className="register__container">
			<FormTitle greeting="Регистрация" />
			<RegistrationForm
				button="Зарегистрироваться"
				onSubmit={onRegister}
			/>
			<FormRedirection
				text="Уже есть аккаунт?"
				button="Войти"
				path="/signin"
			/>
		</div>
	</section>
)

Register.propTypes = {
	onRegister: PropTypes.func.isRequired,
}

export default Register
