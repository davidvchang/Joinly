import React, { Children, ReactNode, useEffect, useState } from 'react'

import { verifyIsLoggedUser } from "../services/usersServices";
import { Navigate } from 'react-router-dom';

interface PropsProtectedRoute {
    children: ReactNode;
}

const ProtectedRoute:React.FC<PropsProtectedRoute> = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [checkedAuth, setCheckedAuth] = useState<boolean>(false);

    const verifyIsAuth = async () => {
        try {
            const data = await verifyIsLoggedUser()
            if(data.user){
                setIsAuthenticated(true)
            } else {
                setIsAuthenticated(false);
            }
            
        } catch (ex) {
            setIsAuthenticated(false);
        } finally {
            setCheckedAuth(true);
        }
    }

    useEffect(() => {
        verifyIsAuth()
    }, [])

    if (!checkedAuth) {
        return null;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>
}

export default ProtectedRoute
