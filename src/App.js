import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import { auth, onAuthStateChanged } from "./config/firebase_example";
import Header from "./components/Header";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import * as PropTypes from "prop-types";

import PrivateRoute from "./routes/PrivateRoute";

function Switch(props) {
  return null;
}

Switch.propTypes = { children: PropTypes.node };

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      {user && (
        <div className="app1">
          <h1>Hello {user.displayName}!</h1>
          <p>{user.email}</p>
          <img src={user.photoUrl} alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
