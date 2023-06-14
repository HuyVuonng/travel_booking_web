import React from 'react';
import config from '~/config';

//page
// import Home from '~/pages/Home';
// import Relax from '~/pages/Relax/Relax';

const ViewDestination = React.lazy(() => import('~/pages/ViewDestination'));
const Home = React.lazy(() => import('~/pages/Home'));
const Relax = React.lazy(() => import('~/pages/Relax/Relax'));

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.relax, component: Relax },
    { path: config.routes.viewdestination, component: ViewDestination },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
