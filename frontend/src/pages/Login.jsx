import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../layouts/FormContainer";
import FormInput from "../components/FormInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    alert(`email:${email}\npassword:${password}`);
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
