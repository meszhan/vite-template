import {RouteObject} from 'react-router-dom';
import loadable from '@loadable/component';
import {Spin} from 'antd';

const Home = loadable(() => import("../modules/Home"), {
    fallback: <Spin />
})

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '*',
        element: <>123</>
    },
]
