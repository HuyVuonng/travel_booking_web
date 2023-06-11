import config from '~/config';

//page
import Home from '~/pages/Home';
import Relax from '~/pages/Relax/Relax';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.relax, component: Relax },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
