import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "../../config/firebase_example";

import { login, selectUser } from "../../features/userSlice";

import "./index.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    console.log("register the user");

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: name,
          photoURL: profilePic,
        })
          .then(
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            )
          )
          .catch((error) => {
            console.log("user not updated");
          });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    // <div className='login'>
    //   <img src='https://www.flaticon.com/free-icon/login_5087579?related_id=5087592&origin=search' alt='' />
    //   <form>
    //     <input
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //       placeholder='Full name (required if registering)'
    //       type='text'
    //     />
    //
    //     <input
    //       value={profilePic}
    //       onChange={(e) => setProfilePic(e.target.value)}
    //       placeholder='Profile picture URL (optional)'
    //       type='text'
    //     />
        // <input
        //   value={email}
        //   onChange={(e) => setEmail(e.target.value)}
        //   placeholder='Email'
        //   type='email'
        // />
    //     <input
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       placeholder='Password'
    //       type='password'
    //     />
    //     <button type='submit' onClick={loginToApp}>
    //       Sign In
    //     </button>
    //   </form>
    //
    //   <p>
    //     Not a member?{' '}
    //     <span className='login__register' onClick={register}>
    //       Register Now
    //     </span>
    //   </p>
    // </div>
    <div className="align">
      <div className="grid align__item">
        <div className="register">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="site__logo"
            width="56"
            height="84"
            viewBox="77.7 214.9 274.7 412"
          >
            <defs>
              <linearGradient id="a" x1="0%" y1="0%" y2="0%">
                <stop offset="0%" stop-color="#8ceabb" />
                <stop offset="100%" stop-color="#378f7b" />
              </linearGradient>
            </defs>
            <path
              fill="url(#a)"
              d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"
            />
          </svg>

          <h2>Sign In</h2>

          <form action="" method="post" className="form">
            <div className="form__field">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="info@mailaddress.com"
              />
            </div>

            <div className="form__field">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="••••••••••••"
              />
            </div>

            <div className="form__field">
              <input onClick={loginToApp} type="submit" value="Log in" />
            </div>
          </form>

          <p>
            {/* Already have an accout? <a href="#"></a> */}
            Already have an accout? <Link to="/Register">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
