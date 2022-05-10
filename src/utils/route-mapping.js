import Home from 'pages/home';

/**
 * - This object contains all the routes used in the project along with their corresponding components and their labels
 * - We should use this everywhere in the project to maintain consistency
 */
export const routeMapping = {
  '/': { title: 'Phonetics', content: 'Phonetics', element: <Home /> },
};
