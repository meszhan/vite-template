import {useRoutes, BrowserRouter, BrowserRouterProps} from 'react-router-dom'
import { Entry } from '../modules/Entry'
import { routes } from '../routes'

export const App = () => {

    return <BrowserRouter><Entry /></BrowserRouter>
}
