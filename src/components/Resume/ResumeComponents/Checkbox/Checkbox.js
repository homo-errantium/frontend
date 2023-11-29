import PropTypes from 'prop-types'
import './Checkbox.scss'

const Checkbox = ({
  checkboxText,
  checkboxId,
  onClick,
  name,
  values,
  handleCheckboxChange,
  disabled,
}) => (
  <div className="checkbox__container">
    <label className="checkbox__label" htmlFor={checkboxId}>
      <input
        name={name}
        type="checkbox"
        onClick={onClick}
        id={checkboxId}
        disabled={disabled}
        className="checkbox__input"
        onChange={handleCheckboxChange}
        checked={values[name] ? values[name] : false}
      />
      <span className="checkbox__text">{checkboxText}</span>
    </label>
  </div>
)

Checkbox.propTypes = {
  checkboxText: PropTypes.string.isRequired,
  checkboxId: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  handleCheckboxChange: PropTypes.func,
  checkboxValues: PropTypes.shape({
    checkbox: PropTypes.bool,
  }),
  name: PropTypes.string,
  values: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.bool])),
  disabled: PropTypes.bool,
}

Checkbox.defaultProps = {
  onClick: () => {},
  handleCheckboxChange: () => {},
  checkboxValues: {},
  name: '',
  values: {},
  disabled: undefined,
}

export default Checkbox
