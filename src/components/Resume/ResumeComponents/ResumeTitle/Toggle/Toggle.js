/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import './Toggle.scss'

const Toggle = ({
  checkboxText,
  checkboxId,
  onClick,
  values,
  name,
  handleCheckboxChange,
}) => (
  // const [isChecked, setIsChecked] = useState(false)

  // const handleToggleChange = () => {
  //   setIsChecked(!isChecked)
  //   onClick(isChecked)
  // }
  <div className="toggle__container">
    <label className="toggle__label" htmlFor={checkboxId}>
      <input
        name={name}
        onClick={onClick}
        type="checkbox"
        id={checkboxId}
        className="toggle__input"
        onChange={handleCheckboxChange}
        checked={values[name] || false}
      />
      <span className="toggle__text">{checkboxText}</span>
    </label>
  </div>
)

Toggle.propTypes = {
  checkboxText: PropTypes.string.isRequired,
  checkboxId: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

Toggle.defaultProps = {
  onClick: () => {},
}

export default Toggle
