import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";

import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../layouts/FormContainer";
import FormInput from "../components/FormInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  //get state data from the store
  const { userInfo } = useSelector((state) => state.auth);

  const [login] = useLoginMutation();
  const navigate = useNavigate();

  useEffect(() => {
    //redirect if logged in
    if (userInfo) navigate("/");
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");

    try {
      //make request first
      const res = await login({ email, password }).unwrap();
      console.log("success!", res);
      //if success then save res data to store
      dispatch(setCredentials(res));
    } catch (err) {
      console.log("error occured!", err);
    }
  };

  return (
    <FormContainer>
      <h1>Log In</h1>
      <Form className="mt-3" onSubmit={submitHandler}>
        <FormInput
          label="email address"
          type="email"
          state={email}
          handler={setEmail}
        />
        <FormInput
          label="password"
          type="password"
          state={password}
          handler={setPassword}
        />
        <Button type="submit" variant="dark" className="mt-3 px-5">
          Log In
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          New here?
          <Link className="px-2 text-decoration-none" to="/signup">
            Sign up
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Login;
