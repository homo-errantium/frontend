import './PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'
import ResumeTitle from '../ResumeTitle/ResumeTitle'

function PersonalData({ setCompletedSteps }) {
	React.useEffect(() => {
		setCompletedSteps(true)
	})

	return (
		<section className="personal-data">
			<ResumeTitle title="Персональные данные" />
			<div className="personal-data__form">
				<div className="personal-data__left-column">
					<label className="personal-data__label" htmlFor="userName">
						Имя
						<input
							className="personal-data__input"
							name="name"
							type="text"
							id="userName"
							placeholder=""
							// value={values.name || ''}
							// onChange={handleChange}
							minLength="2"
							maxLength="30"
							required
						/>
					</label>
					<label className="personal-data__label" htmlFor="surname">
						Фамилия
						<input
							className="personal-data__input"
							name="name"
							type="text"
							id="surname"
							placeholder=""
							// value={values.name || ''}
							// onChange={handleChange}
							minLength="2"
							maxLength="30"
							required
						/>
					</label>
					<label className="personal-data__label" htmlFor="dateBirth">
						Дата Рождения
						<input
							className="personal-data__input"
							name="name"
							type="date"
							id="dateBirth"
							placeholder=""
							// value={values.name || ''}
							// onChange={handleChange}
							// minLength="2"
							// maxLength="30"
							required
						/>
					</label>
					<label className="personal-data__label" htmlFor="city">
						Город проживания
						<input
							className="personal-data__input"
							name="name"
							type="text"
							id="city"
							placeholder=""
							// value={values.name || ''}
							// onChange={handleChange}
							minLength="2"
							maxLength="30"
							required
						/>
					</label>
					<label
						className="personal-data__label"
						htmlFor="profession"
					>
						Желаемая должность
						<input
							className="personal-data__input"
							name="name"
							type="text"
							id="profession"
							placeholder=""
							// value={values.name || ''}
							// onChange={handleChange}
							minLength="2"
							maxLength="30"
							required
						/>
					</label>
				</div>
				<div className="personal-data__right-column"></div>
			</div>
		</section>
	)
}

PersonalData.propTypes = {
	setCompletedSteps: PropTypes.func.isRequired,
}

export default PersonalData
