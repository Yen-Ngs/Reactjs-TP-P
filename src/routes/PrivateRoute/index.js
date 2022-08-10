import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUser } from "../../features/userSlice";

function PrivateRoute({ children }) {
  const auth = useSelector(selectUser);

  return auth ? children : <Navigate to="/" />;
}

export default PrivateRoute;
