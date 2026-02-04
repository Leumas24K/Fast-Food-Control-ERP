import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Inicializamos con lo que haya en localStorage para no perder la sesión al recargar
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('usuario_sesion');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('usuario_sesion', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('usuario_sesion');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user, estaAutenticado: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto fácilmente
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
