import { Typography } from '@mui/material';
import Flex from 'components/flex';
import Link from 'components/link';
import { useLocation } from 'react-router-dom';
import { routeMapping } from 'utils/route-mapping';

/**
 * @returns {JSX.Element} The navbar component
 * @description
 * - The navbar component which contains the links to all the pages
 * - This component can be reused anywhere
 * @example
 * import Navbar from 'layouts/navbar';
 * 
 * const App = () => {
 *  return <Navbar />;
 * }
 */
const Navbar = () => {
  const location = useLocation();

  /**
   * @param {string} path - The path of the link
   * @returns {string} 'true' or 'false' depending on whether the link is active or not
   * @description Compares the link's path with the current location's path
   */
  const checkCurrentPath = (path) => {
    if (location.pathname === path) return 'true';
    return 'false';
  };

  return (
    <Flex justify='space-between' align='center' sx={{ py: '1rem' }}>
      <Link to='/' active={checkCurrentPath('/')}>
        <Typography variant='h6'>{routeMapping['/'].content}</Typography>
      </Link>
    </Flex>
  );
};

export default Navbar;
