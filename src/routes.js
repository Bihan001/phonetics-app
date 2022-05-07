import { Route, Routes as ReactRoutes } from 'react-router-dom';
import AboutUs from 'pages/about-us';
import ContactUs from 'pages/contact-us';
import Home from 'pages/home';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path='/' element={<Home />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/contact-us' element={<ContactUs />} />
    </ReactRoutes>
  );
};

export default Routes;
