import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

import { Form, Button, Container } from "react-bootstrap";
import { signInUserAction } from "../redux/actions";

import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "./containers/CustomInput";
const Signin = () => {
  // dispatch must be at the top
  const dispatch = useDispatch();

  // set the state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // calll the signin method
  const signInUser = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(signInUserAction(user));
  };
  const token = localStorage.getItem("token");

  if (token) {
    return <Redirect to={`/`} />;
  }

  return (
    <Container className="form-controller">
      <h3>SignIn here</h3>
      <Form className="form-group" onSubmit={signInUser}>
        <CustomInput
          controlId="email"
          label="Email"
          placeholder="Enter your email"
          text="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <CustomInput
          controlId="password"
          label="Password"
          placeholder="Enter your password"
          text="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
export default Signin;
