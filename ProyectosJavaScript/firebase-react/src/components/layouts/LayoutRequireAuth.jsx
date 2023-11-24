import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RequireAuth = ({ Outlet }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <div className="container mx-auto px-4">
      <Outlet/>
    </div>
  )
}

export default RequireAuth;