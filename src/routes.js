import {
    HOME_PATH
} from './constants/routeContstants';
import { Home } from './views';

export default [
    {
        path: HOME_PATH,
        exact: true,
        component: Home,
    }
]