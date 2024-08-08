import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../config/firebase_example";
import "./index.css";
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
        <div class="navbar">
          <div class="nav-header">
            <div class="nav-logo">
              <a href="#">
                <img
                  src={require("../../asset/img/logo.png")}
                  width="200px"
                  alt="logo"
                />
              </a>
            </div>
          </div>
          <input type="checkbox" id="nav-check" />
          <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <div class="nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Project</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            <button
              type="button"
              class="btn btn-outline-light"
              onClick={logoutOfApp}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
