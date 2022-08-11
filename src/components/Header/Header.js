import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase_example";
import "./Header.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      {user ? (
        <nav className="navbar">
          <a className="navbar-brand" href="#">
            N A T U R E
          </a>
          <Link to="/home">Props- State</Link>
          <Link to="/arc">AvoidingRC</Link>
          <Link to="/var">Var, let, const</Link>
          <Link to="/function">Function</Link>
          <Link to="/pbv-pbr">PBV - PBR</Link>
          <button
            type="button"
            className="btn btn-primary"
            onClick={logoutOfApp}
          >
            Logout
          </button>
        </nav>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
