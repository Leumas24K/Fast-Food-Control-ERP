import { Outlet , Navigate } from "react-router";
import { useState } from "react";

export default function ProtectedRoutes () {

    const [isAuthenticated] = useState(true);

    return isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;

}



