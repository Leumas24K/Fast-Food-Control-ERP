import { Navigate, Outlet} from 'react-router';
import { useAuth } from '../context/AuthContext';

export default function PrivateRoute({ roleAuthorized }) {

  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (roleAuthorized && !roleAuthorized.includes(user.rol)) {
    // Si el rol no coincide (ej: mesero intentando entrar a admin)
    return <Navigate to="/" replace />;

  }

  return <Outlet />;
}

