import AboutUs from 'pages/about-us';
import ContactUs from 'pages/contact-us';
import Home from 'pages/home';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export const routeMapping = {
  '/': { title: 'Phonetics', content: 'Phonetics', element: <Home /> },
  '/about-us': { title: 'About Us', content: <InfoOutlinedIcon />, element: <AboutUs /> },
  '/contact-us': { title: 'Contact Us', content: <AlternateEmailIcon />, element: <ContactUs /> },
};
