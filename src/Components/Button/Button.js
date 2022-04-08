import PropTypes from 'prop-types';
import s from './Button.module.css';
const Button = ({ onCleareSearchedImages }) => {
  return (
    <button type="button" onClick={onCleareSearchedImages} className={s.Button}>
      <span className={s.ButtonName}>Go back</span>
    </button>
  );
};
export default Button;

Button.propTypes = { onClick: PropTypes.func.isRequired };
