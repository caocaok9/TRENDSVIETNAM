import React from 'react';

const HomePage = React.lazy(() => import('./HomePage'));

const routes = [
  { path: '/', exact: true, name: 'Home' , component: HomePage },
];

export default routes;
