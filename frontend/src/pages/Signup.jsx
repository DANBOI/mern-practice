import { useState } from "react";

import { useDispatch } from "react-redux";
import { useSignupMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";

import { Link, useNavigate } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";

import FormContainer from "../layouts/FormContainer";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const [signup, { isLoading }] = useSignupMutation();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword)
      return toast.error("All these input fields are required!");

    try {
      if (password !== confirmPassword)
        throw new Error("password are not equal!");

      const res = await signup({ name, email, password }).unwrap();

      toast.success(res?.data?.message);
      //if success then save res data to store
      dispatch(setCredentials(res));

      navigate("/");
    } catch (err) {
      // console.log(err.message);
      toast.error(err?.data?.message || err.message);
    }
  };

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form className="mt-3" onSubmit={submitHandler}>
        <FormInput label="name" type="text" state={name} handler={setName} />
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
        <FormInput
          label="confirm password"
          type="password"
          state={confirmPassword}
          handler={setConfirmPassword}
        />
        <FormButton loading={isLoading} text="Sign Up"></FormButton>
      </Form>

      <Row className="py-3">
        <Col>
          Have an account?
          <Link className="px-2 text-decoration-none" to="/login">
            Log In
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Signup;
