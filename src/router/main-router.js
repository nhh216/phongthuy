import MainLayout from '@/layout/main'
import Dashboard from '@/views/dashboard/index'
const MainRouter = {
    path: '/',
    name: 'Main',
    redirect: '/dashboard',
    component: MainLayout,
    children: [
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
        }
    ]
}
export default MainRouter
