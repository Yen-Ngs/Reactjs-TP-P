import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import { auth, onAuthStateChanged } from "./firebase_example";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import * as PropTypes from "prop-types";
import AdvoidingRC from "./components/AdvoidingRC/AdvoidingRC";
import Var from "./components/var/Var";
import Funciton from "./components/function/funciton";
import Pbv from "./components/Pbv-Pbr/Pbv-Pbr";

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
        <Route
          path="arc"
          element={
            <PrivateRoute>
              <AdvoidingRC />
            </PrivateRoute>
          }
        />
        <Route
          path="var"
          element={
            <PrivateRoute>
              <Var />
            </PrivateRoute>
          }
        />
        <Route
          path="function"
          element={
            <PrivateRoute>
              <Funciton />
            </PrivateRoute>
          }
        />
        <Route
          path="pbv-pbr"
          element={
            <PrivateRoute>
              <Pbv />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Login />} />
      </Routes>
      {user && (
        <div>
          <h1>Hello {user.displayName}!</h1>
          <p>{user.email}</p>
          <img src={user.photoUrl} alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
