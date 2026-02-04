import { Routes, Route, BrowserRouter } from 'react-router';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import Menu from '../pages/Client/Menu';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import DashboardAdmin from '../pages/Admin/DashboardAdmin';
import DashboardWaiter from '../pages/Waiter/DashboardWaiter';
import MainNavbar from './MainNavBar';
import Cart from '../components/Menu/Cart'
import { AuthProvider } from '../context/AuthContext';
import { CartProvider } from '../context/CartContext';
import PrivateRoute from './PrivateRoute';

export default function AppRouter() {
    return (
        <AuthProvider>
            <CartProvider>
                <BrowserRouter>
                    <Routes>
                        {/* RUTAS PÚBLICAS (Cualquiera accede) */}
                        <Route element={<MainNavbar />}>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/menu" element={<Menu />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/login" element={<Login />} />                           
                            <Route path="*" element={<NotFound />} />
                        </Route>
                        
                        {/* RUTAS PRIVADAS (Admin) */}
                        <Route element={<PrivateRoute roleAuthorized={['admin']} />}>
                            <Route path="/dashboard-Admin" element={<DashboardAdmin />} />
                        </Route>

                        {/* RUTAS PRIVADAS (Admin/Staff) */}
                        <Route element={<PrivateRoute roleAuthorized={['admin', 'waiter']} />}>
                            <Route path="/dashboard-Waiter" element={<DashboardWaiter />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </AuthProvider>
    )
}

