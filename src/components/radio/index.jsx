import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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
      <RadioGroup defaultValue={defaultValue} name={name} {...rest} sx={{ display: 'flex', flexDirection: direction }}>
        {options.map((option) => (
          <FormControlLabel value={option.value} control={<Radio size={size} />} label={option.label} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtons;
