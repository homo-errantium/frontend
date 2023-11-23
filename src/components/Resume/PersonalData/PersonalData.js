import './PersonalData.scss'
import React from 'react'
import PropTypes from 'prop-types'
import ResumeTitle from '../ResumeComponents/ResumeTitle/ResumeTitle'
import DoubleInput from '../ResumeComponents/DoubleInput/DoubleInput'
import {
	CAREER_OBJECTIVE_TIP,
	ACTUAL_STATUS_TIP,
} from '../../../constants/tips'
import {
	ACTUAL_STATUS_OPTIONS,
	LEVEL_OPTIONS,
} from '../../../constants/input-options'

function PersonalData({ setCompletedSteps }) {
	React.useEffect(() => {
		setCompletedSteps(true)
	})

	return (
		<section className="personal-data">
			<ResumeTitle title="Персональные данные" />
			<div className="personal-data__form">
				<DoubleInput firstLabel="Имя" ordinaryInputFirst />
				<DoubleInput firstLabel="Фамилия" ordinaryInputFirst />
				<DoubleInput
					firstLabel="Дата рождения"
					placeholder="ДД.ММ.ГГ"
					ordinaryInputFirst
				/>
				<DoubleInput
					firstLabel="Город проживания"
					secondLabel="Актуальный статус"
					doubleInput
					ordinaryInputFirst
					selectedInputSecond
					options={ACTUAL_STATUS_OPTIONS}
					tip
					tipText={ACTUAL_STATUS_TIP}
				/>
				<DoubleInput
					firstLabel="Желаемая должность"
					secondLabel="Уровень"
					doubleInput
					ordinaryInputFirst
					selectedInputSecond
					options={LEVEL_OPTIONS}
					tip
					tipText={CAREER_OBJECTIVE_TIP}
				/>
			</div>
		</section>
	)
}

PersonalData.propTypes = {
	setCompletedSteps: PropTypes.func.isRequired,
}

export default PersonalData
