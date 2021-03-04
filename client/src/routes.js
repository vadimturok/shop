import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import DevicePage from "./pages/DevicePage"
import Shop from "./pages/Shop"
import Profile from './pages/Profile'
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, ORDER_ROUTE, ORDER_SUCCESS_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"
import Order from "./pages/Order"
import OrderSuccess from "./pages/OrderSuccess"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket /*по юрл /admin будет вызываться компонент Админ */
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
    {
        path: ORDER_ROUTE,
        Component: Order
    },
    {
        path: ORDER_SUCCESS_ROUTE,
        Component: OrderSuccess
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop /*по юрл /admin будет вызываться компонент Админ */
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth /*по юрл /admin будет вызываться компонент Админ */
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth /*по юрл /admin будет вызываться компонент Админ */
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage /*по юрл /admin будет вызываться компонент Админ */
    },
]