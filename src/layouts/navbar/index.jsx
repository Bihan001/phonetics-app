import { Typography } from '@mui/material';
import Flex from 'components/flex';
import Link from 'components/link';
import { useLocation } from 'react-router-dom';
import { routeMapping } from 'utils/route-mapping';

const Navbar = () => {
  const location = useLocation();

  const checkCurrentPath = (path) => {
    if (location.pathname === path) return 'true';
    return 'false';
  };

  return (
    <Flex justify='space-between' align='center' sx={{ py: '1rem' }}>
      <Link to='/' active={checkCurrentPath('/')}>
        <Typography variant='h6'>{routeMapping['/'].content}</Typography>
      </Link>
      <Flex>
        <Link to='/about-us' active={checkCurrentPath('/about-us')}>
          {routeMapping['/about-us'].content}
        </Link>
        <Link to='/contact-us' active={checkCurrentPath('/contact-us')} sx={{ ml: '2rem' }}>
          {routeMapping['/contact-us'].content}
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
