import { Typography } from '@mui/material';
import Flex from 'components/flex';
import Link from 'components/link';
import { useLocation } from 'react-router-dom';
import { routeMapping } from 'utils/route-mapping';

const Navbar = () => {
  const location = useLocation();

  return (
    <Flex justify='space-between' align='center' sx={{ py: '1rem' }}>
      <Link to='/' active={location.pathname === '/'}>
        <Typography variant='h6'>{routeMapping['/'].content}</Typography>
      </Link>
      <Flex>
        <Link to='/about-us' active={location.pathname === '/about-us'}>
          {routeMapping['/about-us'].content}
        </Link>
        <Link to='/contact-us' active={location.pathname === '/contact-us'} sx={{ ml: '2rem' }}>
          {routeMapping['/contact-us'].content}
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
