import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./screens/Home";
import { Profile } from "./screens/Profile";
import Signin from "./screens/Signin";
import SignUp from "./screens/SignUp";

import "./App.css";
import NavbarTop from "./Components/NavbarTop";
import { useDispatch } from "react-redux";
import {getAllPosts } from './redux/actions';
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    // if (token) {
    //   dispatch(getAllPosts());
    // }
    dispatch(getAllPosts());

  }, []);
  return (
    <Router>
      <NavbarTop />

      <Route path="/" exact component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={Signin} />
      <Route path="/profile" component={Profile} />
    </Router>
  );
}

export default App;
