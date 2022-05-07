import { Typography } from '@mui/material';
import Flex from 'components/flex';
import Link from 'components/link';

const Navbar = () => {
  return (
    <Flex justify='space-between' align='center'>
      <Link to='/'>
        <Typography variant='h6'>Phonetics App</Typography>
      </Link>
      <Flex>
        <Link to='/about-us'>About Us</Link>
        <Link to='/contact-us' style={{ marginLeft: '2rem' }}>
          Contact Us
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
