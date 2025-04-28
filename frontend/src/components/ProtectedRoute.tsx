import React, { Children, ReactNode, useEffect, useState } from 'react'

import { verifyIsLoggedUser } from "../services/usersServices";
import { Navigate } from 'react-router-dom';

interface PropsProtectedRoute {
    children: ReactNode;
}

const ProtectedRoute:React.FC<PropsProtectedRoute> = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const verifyIsAuth = async () => {
        const data = await verifyIsLoggedUser()
        if(data.user){
            setIsAuthenticated(true)
        } else {
            setIsAuthenticated(false);
        }
    }

    useEffect(() => {
        verifyIsAuth()
    }, [])

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children
}

export default ProtectedRoute
