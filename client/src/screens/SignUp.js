import React, { useState } from "react";

import { Form, Button, Container } from "react-bootstrap";
import "./index.scss";
import CustomInput from "./containers/CustomInput";
import {registerUserAction} from "../redux/actions";
import { useDispatch } from 'react-redux';
const SignUp = () => {
  //must be at top in the main functional component
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpUser = (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && password !== "") {
      // console.log(name, email, password);
      const user = {
        name,
        email,
        password,
      };
      dispatch(registerUserAction(user));
    }
  };

  return (
    <Container className="form-controller">
      <h3>SignUp HERe</h3>
      <Form className="form-group" onSubmit={signUpUser}>
        <CustomInput
          controlId="name"
          label="Name"
          placeholder="Enter your name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <CustomInput
          controlId="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomInput
          controlId="Password"
          label="Password"
          placeholder="xxxxx"
          type="password"
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
export default SignUp;
