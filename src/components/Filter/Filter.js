import PropTypes from 'prop-types';
import { Input } from '../ContactForm/ContactForm.styled'
export const Filter = ({ value, onChange }) => (
  <label>
    Find
    <Input type="text" value={value} onChange={onChange} />
  </label>
);
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange:  PropTypes.func.isRequired
}


