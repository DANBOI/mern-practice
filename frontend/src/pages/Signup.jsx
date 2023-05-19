import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../layouts/FormContainer";
import FormInput from "../components/FormInput";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    console.log(name, email, password, confirmPassword);
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
        <Button type="submit" variant="dark" className="mt-3 px-5">
          Sign Up
        </Button>
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
