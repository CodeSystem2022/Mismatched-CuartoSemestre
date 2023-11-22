import { Navigate, Outlet } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({isAllowed, children, redirectTo}) => {
    if(!isAllowed)return<Navigate to={redirectTo} replace/>;
    
    return children ? children : <Outlet />
}