import { Routes, Route, BrowserRouter } from 'react-router';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import Menu from '../pages/Client/Menu';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import DashboardAdmin from '../pages/Admin/DashboardAdmin';
import AdminMenu from '../pages/Admin/AdminMenu';
import AdminOverview from '../pages/Admin/AdminOverview';
import AdminTables from '../pages/Admin/AdminTables';
import AdminInventory from '../pages/Admin/AdminInventory';
import AdminBilling from '../pages/Admin/AdminBilling';
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
                        
                        {/* RUTAS PRIVADAS (Admin) - con rutas anidadas para módulos */}
                        <Route element={<PrivateRoute roleAuthorized={['admin']} />}>
                            <Route path="/dashboard-Admin" element={<DashboardAdmin />}>
                                <Route index element={<AdminOverview />} />
                                <Route path="overview" element={<AdminOverview />} />
                                <Route path="menu" element={<AdminMenu />} />
                                <Route path="mesas" element={<AdminTables />} />
                                <Route path="inventario" element={<AdminInventory />} />
                                <Route path="facturacion" element={<AdminBilling />} />
                            </Route>
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

