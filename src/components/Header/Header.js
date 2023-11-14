import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.scss'

function Header({ isLoggedIn, nextPage }) {
	// eslint-disable-next-line no-console
	console.log(nextPage)
	const navigate = useNavigate()

	return (
		<header className="header">
			{isLoggedIn ? (
				<button
					className="header__button"
					type="button"
					label="button"
					onClick={() => navigate('/my-profile')}
				>
					Личный кабинет
				</button>
			) : (
				<button
					className="header__button"
					type="button"
					label="button"
					onClick={() => navigate('/')}
				>
					Главная страница
				</button>
			)}
			<div className="header__navigation-steps">
				<button
					className="header__button header__button_prev"
					type="button"
					label="button"
					onClick={() => navigate(-1)}
				>
					Предыдущий шаг
				</button>
				<button
					className="header__button header__button_next"
					type="button"
					label="button"
					onClick={() => navigate(`${nextPage}`)}
				>
					Следующий шаг
				</button>
			</div>
		</header>
	)
}

export default Header
