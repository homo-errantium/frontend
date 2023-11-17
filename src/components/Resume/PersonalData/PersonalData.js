import './PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'
import ResumeTitle from '../ResumeComponents/ResumeTitle/ResumeTitle'
import DoubleInput from '../ResumeComponents/DoubleInput/DoubleInput'
import {
	CAREER_OBJECTIVE_TIP,
	ACTUAL_STATUS_TIP,
} from '../../../constants/tips'

function PersonalData({ setCompletedSteps }) {
	React.useEffect(() => {
		setCompletedSteps(true)
	})

	return (
		<section className="personal-data">
			<ResumeTitle title="Персональные данные" />
			<div className="personal-data__form">
				<DoubleInput firstLabel="Имя" />
				<DoubleInput firstLabel="Фамилия" />
				<DoubleInput
					firstLabel="Дата рождения"
					placeholder="ДД.ММ.ГГ"
				/>
				<DoubleInput
					firstLabel="Город проживания"
					secondLabel="Актуальный статус"
					doubleInput
					tip
					tipText={ACTUAL_STATUS_TIP}
				/>
				<DoubleInput
					firstLabel="Желаемая должность"
					secondLabel="Уровень"
					doubleInput
					tip
					tipText={CAREER_OBJECTIVE_TIP}
				/>
				{/* <div className="personal-data__left-column"></div>
				<div className="personal-data__right-column"></div> */}
			</div>
		</section>
	)
}

PersonalData.propTypes = {
	setCompletedSteps: PropTypes.func.isRequired,
}

export default PersonalData
