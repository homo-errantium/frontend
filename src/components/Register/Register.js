import React from 'react'
import PropTypes from 'prop-types'
import './Register.scss'
import FormTitle from './FormTitle/FormTitle'
import RegistrationForm from './RegistrationForm/RegistrationForm'
import FormRedirection from './FormRedirection/FormRedirection'
import Header from '../Header/Header'

const Register = ({ onRegister, isOpen }) => (
	<>
		<Header />
		<section className="register">
			<div className="register__container">
				<FormTitle
					page="register"
					greeting="Регистрация"
					isOpen={isOpen}
				/>
				<RegistrationForm
					buttonText="Зарегистрироваться"
					onSubmit={onRegister}
				/>
				<FormRedirection
					page="register"
					text="Уже есть аккаунт?"
					button="Войти"
					path="/signin"
					isOpen={isOpen}
				/>
			</div>
		</section>
	</>
)

Register.propTypes = {
	onRegister: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
}

export default Register
