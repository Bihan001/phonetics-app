import { Box } from '@mui/material';
import Translator from 'layouts/translator';

/**
 * - The home page component
 * @returns {JSX.Element} The Home page
 */
const Home = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Translator />
    </Box>
  );
};

export default Home;
