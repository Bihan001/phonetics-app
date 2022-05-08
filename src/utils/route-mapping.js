import AboutUs from 'pages/about-us';
import ContactUs from 'pages/contact-us';
import Home from 'pages/home';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

/**
 * - This object contains all the routes used in the project along with their corresponding components and their labels
 * - We should use this everywhere in the project to maintain consistency
 */
export const routeMapping = {
  '/': { title: 'Phonetics', content: 'Phonetics', element: <Home /> },
  '/about-us': { title: 'About Us', content: <InfoOutlinedIcon />, element: <AboutUs /> },
  '/contact-us': { title: 'Contact Us', content: <AlternateEmailIcon />, element: <ContactUs /> },
};
