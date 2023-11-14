import React from 'react'
import PropTypes from 'prop-types'
import './Login.scss'
import '../Register/Register.scss'
import FormTitle from '../Register/FormTitle/FormTitle'
import FormRedirection from '../Register/FormRedirection/FormRedirection'
import LoginForm from './LoginForm/LoginForm'

const Login = ({ onLogin }) => (
	<section className="login register">
		<div className="login__container register__container">
			<FormTitle page="login" greeting="Привет!" />
			<LoginForm button="Войти" onSubmit={onLogin} />
			<span className="login__restore-password">Не помню пароль</span>
			<FormRedirection
				page="login"
				button="Зарегистрироваться"
				path="/signup"
			/>
		</div>
	</section>
)

Login.propTypes = {
	onLogin: PropTypes.func.isRequired,
}

export default Login
