import React from 'react'
import PropTypes from 'prop-types'
import './Login.scss'
import '../Register/Register.scss'
import FormTitle from '../Register/FormTitle/FormTitle'
import FormRedirection from '../Register/FormRedirection/FormRedirection'
import LoginForm from './LoginForm/LoginForm'

const Login = ({ onLogin }) => (
	<section className="login register">
		<FormTitle greeting="Привет!" />
		<LoginForm button="Войти" onSubmit={onLogin} />
		<FormRedirection
			text="Еще не зарегистрированы?"
			button="Зарегистрироваться"
			path="/signup"
		/>
	</section>
)

Login.propTypes = {
	onLogin: PropTypes.func.isRequired,
}

export default Login
