import { Routes, Route } from 'react-router';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import Menu from '../pages/Client/Menu';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import DashboardAdmin from '../pages/Admin/DashboardAdmin';
import DashboardWaiter from '../pages/Waiter/DashboardWaiter';

export default function AppRouter() {
    return (
        <Routes>

            {/* RUTAS PÚBLICAS (Cualquiera accede) */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />

            {/* RUTAS PRIVADAS (Staff/Admin) */}
            <Route path="/dashboard-Admin" element={<DashboardAdmin />} />
            <Route path="/dasboard-Waiter" element={<DashboardWaiter />} />
        </Routes>
    )
}

