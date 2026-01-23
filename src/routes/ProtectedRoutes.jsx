import { Outlet , Navigate } from "react-router";
import { useState } from "react";

export default function ProtectedRoutes () {

    const [isAuthenticated] = useState(false);

    return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;

}



