import { Route, Routes as ReactRoutes } from 'react-router-dom';
import { routeMapping } from 'utils/route-mapping';

const Routes = () => {
  return (
    <ReactRoutes>
      {Object.keys(routeMapping).map((route) => (
        <Route key={route} path={route} element={routeMapping[route].element} />
      ))}
    </ReactRoutes>
  );
};

export default Routes;
