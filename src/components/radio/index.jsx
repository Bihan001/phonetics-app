import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from 'prop-types';

const RadioButtons = (props) => {
  const {
    direction = 'column',
    size = 'small',
    name = '',
    label = '',
    defaultValue = '',
    options = [],
    onChange = () => {},
    ...rest
  } = props;

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup defaultValue={defaultValue} name={name} {...rest} sx={{ display: 'flex', flexDirection: direction }} onChange={onChange}>
        {options.map((option) => (
          <FormControlLabel key={option.value} value={option.value} control={<Radio size={size} />} label={option.label} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

RadioButtons.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
  size: PropTypes.oneOf(['small', 'medium']),
  name: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func,
};

export default RadioButtons;
