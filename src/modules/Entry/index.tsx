import {useRoutes, BrowserRouter} from 'react-router-dom'
import { routes } from '../../routes'

export const Entry = () => {
    const _routes = useRoutes(routes)
    console.log(_routes)

    return <>{_routes}</>
}
